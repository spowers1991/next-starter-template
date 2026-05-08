
import { useFilters } from "@/lib/filters/state/FiltersContext";
import { useAnimations } from "@/lib/animations/state/AnimationsContext";

export function useClickEvents(events?: { name: string; type: string }[]) {

  const { FILTERS_clearFilters } = useFilters();
  const { ANIMATIONS_update } = useAnimations();

  return () => {
    for (const event of events || []) {
      console.log(events, "events in useClickEvents");
      if (event?.type === "onClick" && event?.name === "clearFilters") {
        FILTERS_clearFilters();
      }
      if (event?.type === "onClick" && event?.name === "restartAnimations") {
        ANIMATIONS_update([
          {
            id: 'ANIMATION_[Movies]_<H1/>',
            config: { status: "restart" }
          }
        ]);
      }
    }
    // Add more event handling logic here as needed
  };
}
