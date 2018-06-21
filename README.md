# React Component Swiper

React Component Swiper was full build with render props for full control of your logic and maximum re-use  as possible

### Install
```
yarn add react-component-swiper
```

### Example
```javascript
import ComponentSwiper from 'react-component-swiper'

<ComponentSwiper
  data={[
    <ExampleComponent number={1} />,
    <ExampleComponent number={2} />,
    <div className='example'>3</div>
   ]}
   arrowRight={(props) => (
     <button onClick={() => props.goNext()}>goNext</button>
   )}
   arrowLeft={(props) => (
     <a href="#" onClick={() => props.goPrev()}>goNext</a>
   )}
   conditionNext={true}
   conditionPrev={true}
/>
```
### Running example locally
```
yarn dev
```
Then access your localhost on port 9000 http://localhost:9000

### Props

 - #### data: React.PropTypes.array
	An array of components
- #### arrowRight: React.PropTypes.func
	A function for render an markup (a button for example) tag with access of goNext() method
- #### arrowLeft: React.PropTypes.func
	A function for render an markup tag (a button for example) with access of goPrev() method
- #### conditionNext: React.PropTypes.bool
	Conditional for go to next slide
- #### conditionPrev: React.PropTypes.bool
	Conditional for go to prev slide

## License
[MIT](http://opensource.org/licenses/MIT) ©
