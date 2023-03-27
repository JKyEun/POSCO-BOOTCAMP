function String() {
  const str = 'Hello, first exercise';
  return (
    <div
      onClick={() => {
        alert('클릭 됨!');
      }}
    >
      {str}
    </div>
  );
}

export default String;
