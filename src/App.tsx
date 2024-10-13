import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen px-0 pt-24 sm:px-12 md:px-24 lg:px-36 xl:px-52">
      <div className="flex h-full w-full flex-row rounded-t-3xl bg-gray-900">
        <div className="h-full w-3/5 p-12">
          <div className="aspect-[9/16] w-full rounded-2xl bg-white" />
        </div>
        <div className="flex-grow p-12 pl-0">
          <div className="mb-12">
            <h1 className="text-8xl font-bold uppercase text-white">
              Product <span className="text-gray-700">designer</span>
            </h1>

            <p className="text-gray-500">
              Passionate about creating and designing products that are both
              functional and aesthetically pleasing.
            </p>
          </div>

          <div className="flex flex-row gap-4 text-white *:flex *:size-24 *:flex-col">
            <div>
              <div className="text-6xl font-bold">11+</div>
              <div className="text-sm uppercase text-gray-500">
                Years of experience
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold">46</div>
              <div className="text-sm uppercase text-gray-500">
                Projects completed
              </div>
            </div>
            <div>
              <div className="text-6xl font-bold">31</div>
              <div className="text-sm uppercase text-gray-500">
                Worldwide clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
