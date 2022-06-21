# use-growl-hook

> use growl hook library

[![NPM](https://img.shields.io/npm/v/use-growl-hook.svg)](https://www.npmjs.com/package/use-growl-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-growl-hook
```

## Usage

```jsx
import React, { Component } from 'react'

import { Growl, useGrowl } from 'use-growl-hook'
import 'use-growl-hook/dist/index.css'

const Example = ({message}) => {
  const [growlActive, setGrowlActive] = useGrowl(2)

  render() {
    return <Growl active={growlActive} message={message} onDismissed={()=> setGrowlActive(false)} />
  }
}
```

## License

MIT © [colinsum7](https://github.com/colinsum7)
