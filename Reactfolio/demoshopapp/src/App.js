import "./App.css";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/Card";

function App() {
  // response in the form of array inside it object
  const products = [
    {
      Id: "p1",
      title: "Nirma",
      amount: "100",
      date: new Date(2021, 8, 10),
    },
    {
      Id: "p2",
      title: "Sirf Excle",
      amount: "200",
      date: new Date(2021, 2, 10),
    },
    {
      Id: "p3",
      title: "Tide",
      amount: "130",
      date: new Date(2021, 12, 14),
    },
    {
      Id: "p4",
      title: "TanMan",
      amount: "540",
      date: new Date(2021, 5, 5),
    },

  ];

  return (
    <div>
    <products items={products} />
    </div>
  );
}

export default App;
