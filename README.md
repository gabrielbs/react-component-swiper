# react-component-swiper

## Usage

```javascript
import ComponentSwiper from 'swiper'

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
/>
```

## Props
