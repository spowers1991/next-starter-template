export function useClickEvents(events?: { name: string; type: string, handler?: () => void }[]) {

  return () => {
    for (const event of events || []) {
      if(event?.type === "onClick" && typeof event.handler === "function") {
        event.handler?.();
      }
    }
  };
}
