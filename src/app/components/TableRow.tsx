import { Advocate } from "../page";

const TableRow = (item: Advocate) => {
  const {
    id,
    firstName,
    lastName,
    city,
    degree,
    specialties,
    yearsOfExperience,
    phoneNumber,
  } = item;

  return (
    <tr key={id}>
      <td className="p-3 text-left flex-3">
        <p>
          {firstName} {lastName}, {degree}
        </p>
        <p>{city}</p>
        <p>{phoneNumber}</p>
      </td>
      <td className="p-8 text-left flex-3">
        {specialties.map((specialty) => (
          <span key={specialty}>{specialty}, </span>
        ))}
      </td>
      <td className="p-8 text-left  flex-3">{yearsOfExperience} years</td>
    </tr>
  );
};

export default TableRow;
