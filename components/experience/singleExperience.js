import React from "react"

export default function SingleExperience(props) {
  const {
    company_name,
    from_date,
    to_date,
    is_current,
    job_title,
    desc,
  } = props.experience

  return (
    <>
      <div>
        <h3>{company_name}</h3>
        <p>
          {from_date} - {is_current ? "Current" : to_date}
        </p>
        <p>
          <strong>Position: </strong> {job_title}
        </p>
        <p>
          <strong>Description: </strong> {desc}
        </p>
      </div>
    </>
  )
}
