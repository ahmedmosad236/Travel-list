function States({ items }) {
  const pack = items.filter((item) => item.packed).length;
  const precentage = (pack / items.length) * 100;
  const precentageFixed = precentage.toFixed(2);
  if (!items.length)
    return (
      <p>
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  return (
    <p>
      {precentage === 100
        ? "You got everything! Ready to go ✈️"
        : `💼 You have ${items.length} items on your list, and you already packed ${pack} (${precentageFixed}%)`}
    </p>
  );
}

export default States;
