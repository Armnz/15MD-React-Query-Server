import './App.css';
import useLocalStorage from 'use-local-storage';
import Card from './components/Card/Card.tsx';
import FormCat, { Cat } from './components/FormCat/FormCat.tsx';

const App = () => {
  const [cats, setCats] = useLocalStorage<Cat[]>('catData', []);

  return (
    <>
      <section className="add-cat">
        <div className="row">
          <div className="col-4">
            <FormCat
              onSubmit={(newCat) => {
                setCats([...cats, { ...newCat, id: Math.random() }]);
              }}
            />
          </div>

          <div className="col-8">
            <div className="row">
              {cats.map(({ name, color, breed, age, id }, index) => (
                <div className="col-4 flex" key={id}>
                  <Card
                    id={id}
                    name={name}
                    age={age}
                    color={color}
                    breed={breed}
                    onEdit={(payload) => {
                      const clonedCats = [...cats];
                      clonedCats[index] = payload
                      setCats(clonedCats);
                    }}
                    onDelete={() => {
                      const clonedCats = [...cats];

                      clonedCats.splice(index, 1);

                      setCats(clonedCats);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
