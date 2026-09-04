import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useAppContext();
  const navigate = useNavigate()

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(
        doctors.filter((doctor) => doctor.speciality === speciality),
      );
    }
    else{
      setFilterDoc(doctors);
    }
  };


  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div className="py-8">
      <p className="mb-6 text-gray-600">Browse through Doctors specialist.</p>
      <div className="flex flex-col gap-8 md:flex-row md:items-start">
        <aside className="w-full shrink-0 md:w-56">
          <p className="mb-3 font-medium text-gray-900">Filter by speciality</p>
          <div className="flex flex-wrap gap-2 md:flex-col">
            {[
              "General physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist",
            ].map((item) => (
              <button
                key={item}
                onClick={() => navigate(`/doctors/${item}`)}
                className="rounded-md border border-gray-200 px-4 py-2 text-left text-sm text-gray-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        </aside>
        <div className="grid min-w-0 flex-1 grid-cols-1 gap-4 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {filterDoc.map((doctor) => (
            <div
            key={doctor._id}
              onClick={() => navigate(`/appointments/${doctor._id}`)}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer bg-white"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-48 object-cover bg-gray-100"
              />
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-green-500 text-xs font-medium">
                    Available
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-900">
                  {doctor.name}
                </p>
                <p className="text-sm text-gray-600">{doctor.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
