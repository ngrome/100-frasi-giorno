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
