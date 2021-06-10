export type Navigation = {
  navigate: (scene: string, params?: any) => void;
  goBack: () => void;
  push: (scene: string, params?: any) => void;
};
