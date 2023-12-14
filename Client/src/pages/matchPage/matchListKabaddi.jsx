import { useSelector } from "react-redux"

const MatchListKabaddi = () => {

const matchList = useSelector(state => state.match.matchList);
console.log(matchList)

  return (
    <div>matchListKabaddi</div>
  )
}

export default MatchListKabaddi