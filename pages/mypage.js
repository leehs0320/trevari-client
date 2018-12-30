import Layout from '../containers/Layout';

const Mypage = () => {
  return (
    <Layout>
      <div id="mypage">

        <div id="mypage_box">
          <h1>마이페이지</h1>
        </div>

        <style jsx>{`
          #mypage {
            border: 1px solid #DDD;
          }
          #mypage_box {
            border: 1px solid #DDD;
            margin: 0 auto;
            width: 60%;
          }
          @media screen and (max-width: 600px) {
            #mypage_box {
              width: 100%;
            }
          }
        `}</style>

      </div>
    </Layout>
  )
}

export default Mypage