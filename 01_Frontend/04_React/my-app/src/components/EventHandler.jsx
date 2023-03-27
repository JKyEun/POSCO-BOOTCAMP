function EventHandler() {
  function printConsole() {
    console.log('클릭됨!');
  }
  return <span onClick={printConsole}>클릭!</span>;
}

export default EventHandler;
