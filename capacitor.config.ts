import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'calendar-app-m12',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
