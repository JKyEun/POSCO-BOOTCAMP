function HelloWorldButton() {
  const [isClick, setClickState] = React.useState(false);
  const text = isClick ? 'True' : 'False';
  console.log(isClick);
  return React.createElement(
    'button',
    {
      onClick: () => setClickState(!isClick),
    },
    text
  );
}
const e = React.createElement;
const domContainer = document.querySelector('#app');
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));
