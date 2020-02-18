// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyACWNht9ZmZIa0LhWf0hmgMtENnvt8FuCk',
    authDomain: 'twita-dev.firebaseapp.com',
    databaseURL: 'https://twita-dev.firebaseio.com',
    projectId: 'twita-dev',
    storageBucket: 'twita-dev.appspot.com',
    messagingSenderId: '36636702',
    appId: '1:36636702:web:1f7fb36f9111d719acc60f',
    measurementId: 'G-1LWSDK596J'
  },
  placeholderURL: 'https://jsonplaceholder.typicode.com',
  twitaOptions: [
    {
      title: 'Text',
      icon: 'file-text-outline'
    },
    {
      title: 'Code',
      icon: 'code-outline'
    },
    {
      title: 'Image',
      icon: 'image-outline'
    },
    {
      title: 'File',
      icon: 'file-add-outline'
    }
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
