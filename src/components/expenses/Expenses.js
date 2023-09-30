import "./Expenses.css";
import ExpenseItem from "../expense-item/ExpenseItem";
import Card from "../UI/card/Card";

export default function Expenses(props) {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((el) => (
        <ExpenseItem title={el.title} amount={el.amount} date={el.date} />
      ))}
    </Card>
  );
}
