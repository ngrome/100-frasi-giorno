export function Traduci(lang: string, elem: string, field: string) {
  return function ( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    const original = descriptor.value;
    descriptor.value = function(...args) {
      this['traduzione'].getTraduzione(this[elem][field], lang).subscribe(
        data => {
          this[elem][field] = data.text[0];
          return true;
        }
      );
      let result = '';
      if (original) {
        result = original.apply(this, args);
      }
      return result;
    };
    return descriptor;
  };
}

export function Traducimi(lang: string, field: string) {
  return (target: any, key: any) => {

    const getter = function () {
      return key;
    };

    // property setter
    const setter = function (newVal) {
      this.changeDetector.detach();
      key = newVal;
      this['traduzione'].getTraduzione(key[field], lang).subscribe(
        data => {
          console.log(data.text[0]);
          key[field] = data.text[0];
          this.changeDetector.detectChanges();
        }
      );
    };

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  };
}
