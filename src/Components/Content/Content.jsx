import { useEffect, useState } from 'react'
import DealList from './DealList/DealList'
import styles from './Content.module.css'


function Content() {
  const [dealsData, setDealsData] = useState()

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/deal')
      .then((response) => response.json())
      .then((data) => setDealsData(data))
  }, [])

  const filterByStatus = (data, status) => {
    return data?.filter((element) => element.dealStatus == status)
  }

  return (
    <div className={styles.content}>
      <div className={styles.dealListWrapper}>
        <DealList title="LEAD" data={filterByStatus(dealsData, "LEAD")}/>
        <DealList title="NEGOTIATION" data={filterByStatus(dealsData, "NEGOTIATION")}/>
        <DealList title="CLOSED" />
        <DealList title="LOST" />
      </div>
        <div style={{width: "30%"}}>Deals summary</div>
    </div>
  )
}
export default Content