# frontend-assessment
This project utilizes the following, please install the corresponding dependencies if needed.
- Vue CLI
- Vue Router
- SCSS/SASS

## Project setup (only if NodeJS isn't installed)
```
npm install
```

## Use Vue/CLI
```
npm install -g @vue/cli 
```

## Use of Vue Router
```
npm install vue-router@next
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Setup SCSS
```
npm install -D sass-loader sass
```

## Bonus Question (banana):
- ('b' + 'a' + + 'a' + 'a').toLowerCase()
- 'b' + 'a' = 'ba'
- (space) + 'a' = NaN (since it is + +, this will consider it as a number but since after + + is 'a', which is a char, it will be considered as NaN)
- + a = 'baNaNa'
- use toLowerCase() it will be 'banana'

