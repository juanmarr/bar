import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import RemoveBtn from "../components/RemoveBtn";
import OrderBtn from "../components/OrderBtn";

//this fetch will automatically cache so we add the 'no-store'
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if(!res.ok) {
      throw new Error("Failed to fetch Drinks");
    }
    return res.json();
  }
   catch (error) {
    console.log("Error loading drinks", error);
  }
};

export default async function Menu() {
  const { topics } = await getTopics();
  console.log(topics);
  return (
    <form>
      {topics.map( (t) => (
        <div className="p-4 border border-slate-300 my-3 d-flex justify-content-between gap-5 items-start">
          <div>
            <h2>{t.drink}</h2>
            <div>{t.description}</div>
            <div>
              Quantity <input type="number" min={1} max={15} />
            </div>
            <span className="form-text">
              To order more than 15 drinks place multiple orders.
            </span>
          </div>

          <div className=" d-flex flex-row gap-2">
            <OrderBtn />
            <RemoveBtn />
          </div>
        </div>
         ))}
    </form>
  );
}
