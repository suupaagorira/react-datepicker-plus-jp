() => {
  const [value, setValue] = useState(new Date());
  return (
    <DatePicker
      enableYearMonthInput
      yearRange={[2000, 2100]}
      selected={value}
      onChange={(d) => setValue(d)}
      locale="ja"
    />
  );
};
