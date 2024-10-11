import React from 'react'

const SubTableItem = ({email,date,mongoId,deleteEmails }) => {
    const emailDate = new Date(date)
  return (
    <tr className="bg-white border-b">
      <th className="items-center gap-3 hidden sm:flex px-6 font-medium text-gray-900 whitespace-nowrap">
        <p className="font-semibold">{email ? email : "No email"}</p>
      </th>
      <td className="px-6 py-4">{emailDate.toDateString()}</td>
      <td onClick={()=>deleteEmails(mongoId)}  className="pr-6 pl-[40px] py-3 cursor-pointer">x</td>
    </tr>
  )
}

export default SubTableItem;
