export interface AnimationConfig {
  index?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  status?: 'restart' | 'play';
}