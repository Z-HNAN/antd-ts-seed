# Antd-mobile-ts Seed


## install

```bash
yarn

yarn start
```

## feature

- typescript
- eslint (umijs/fabric)
- antd-mobile
- CustomSVG
- tabbar
- umi
- dva

### tabbar

`src/layout/MenuBar/index.tsx`

```js
{
  title: '用户', 
  icon: 'add',
  selectedIcon: 'add',
  link: '/users',
},
```

### demo

http://127.0.0.1:8000/users

### customSVG

put svg in `src/components/Icon/svg` named *add.svg*

```ts
import Icon from '@/components/Icon'

<Icon type='add' />
```