export function useP(functions?: { name?: string | undefined; type?: string | undefined; handler?: (() => void | undefined) | undefined; }[]) {

  functions?.forEach(func => {
    if(func.handler && func.handler instanceof Function) {
      func.handler();
    }
  });
  
}