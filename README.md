# React-Native-Auth-Boilerplate

A React Native template with a working Firebase Authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- XCode and an iOS Emulator
- Android Studio and an Android Emulator

### Start development environment

#### Android and iOS

- Follow the getting started on https://rnfirebase.io/ to get your Firebase credentials for both iOS and Android.
- Create a Realtime DB on Firebase and set these rules:

```
{
    "rules": {
        ".read": false,
        ".write": false,
        "users":
        {
            "$userId":
            {
                ".read": "auth.uid === $userId",
                ".write": "auth.uid === $userId"
            }
        }
    }
}

```

##### Android

Launch the Emulator on Android Studio.

```
npx react-native run-android
```

##### iOS

```
cd ios
pod install
cd ..
npx react-native run-ios
```

### Done

- React Native routing system
- Fully working authentication system (Signup/Login/Signout)
- Firebase Realtime Database link with permission management (Read/Create/Update/Remove)
- Task creation, push into DB and management (Status update and task removal)

### To do

- [x] Add style to the registration flow
- [x] Add link to a DB
- [x] Fix performance issues (Was caused by a missing useEffect)
- [ ] Create generic layouts
