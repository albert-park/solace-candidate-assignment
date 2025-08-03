import { Advocate } from "../page";

const TableRow = (item: Advocate) => {
  const {
    id,
    firstName,
    lastName,
    city,
    state,
    degree,
    specialties,
    yearsOfExperience,
    phoneNumber,
  } = item;

  return (
    <tr key={id}>
      <td className="p-3 text-center contact-section">
        <strong>
          {firstName} {lastName}, {degree}
        </strong>
        <p>
          {city}, {state}
        </p>
        <p>{phoneNumber}</p>
      </td>
      <td className="p-8 text-left list-section">
        {specialties.map((specialty) => (
          <span key={specialty}>{specialty}, </span>
        ))}
      </td>
      <td className="p-8 text-left years-section">{yearsOfExperience} years</td>
    </tr>
  );
};

export default TableRow;
