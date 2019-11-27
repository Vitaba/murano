export interface AvatarConfig {
  dateFormat?: string;
}

export interface AvatarData {
  name?: string;
  image?: {
    value: string;
    alt: string;
  };
  date?: string;
}

export interface AvatarStyles {
  container: string;
  image: string;
  dataContainer: string;
  name: string;
  date: string;
}
