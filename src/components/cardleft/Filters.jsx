import AdultChild from './AdultChild';
import BoatSize from './boatSize/BoatSize';
import BoatType from './boatType/BoatType';
import BudgetSlider from './budget/Budget';
import Pets from './pets/Pets';

function Filters() {
  return (
    <div>
      <div className="bg-blue-500 text-white h-8 w-58 rounded-t-md ml-8 mt-2 flex items-center justify-center">
        Filters
      </div>
      <div className="filters border border-gray-300 rounded-b-md w-72 ml-8 h-[61.2em] flex flex-col gap-4 bg-white">
        <div>
          {/* <div className="text-lg font-bold ml-4 mt-4">Budget</div>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div>€0</div>
            </div>
            <div className="w-10 h-1 bg-blue-500"></div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div>€370</div>
            </div>
            <div className="w-10 h-1 bg-blue-500"></div>
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div>€1000</div>
            </div>
          </div> */}
          <BudgetSlider />
        </div>
        <div className="bg-gray-200 h-3"></div>
        <div>
          <AdultChild NoOf="No of Adults" Ages="Ages 13 or above" Value="1" />
          <AdultChild NoOf="No of Children" Ages="Age 5-12" Value="0" />
          <AdultChild NoOf="No of Cabin/Bedrooms" Value="0" />
          <Pets />
        </div>
        <div className="bg-gray-200 h-3"></div>
        <BoatType />
        <div className="bg-gray-200 h-3"></div>
        <div>
          {/* <div className="text-lg font-bold ml-4">Boat Size</div>
          <div className="flex items-center">
            <div className="flex flex-col items-center mr-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div>5 Mtr</div>
            </div>
            <div className="w-10 h-1 bg-blue-500"></div>
            <div className="flex flex-col items-center mx-2">
              <div className="w-5 h-5 rounded-full border-2 border-blue-500"></div>
              <div>15 Mtr</div>
            </div>
            <div className="w-10 h-1 bg-blue-500"></div>
            <div className="flex flex-col items-center ml-2">
              <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
              <div>20 Mtr</div>
            </div>
          </div> */}
          <BoatSize />
        </div>
      </div>
    </div>
  );
}

export default Filters;
