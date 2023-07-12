import React, { useEffect, useState } from 'react';
import {useSession, signOut, getSession} from 'next-auth/react';
import axios from 'axios';
import Signin from '../pages/signin';
import Linechart from '@/components/linechart';
import PieChart from '@/components/piechart';

const Dashboard = () => {
  const { data: session, status } = useSession();
  console.log(session);

  if (status !== 'authenticated') {
    return <p>Not signed in</p>;
  }

  return <MainContent />;
};

const MainContent = () => {
  const { data: session, status } = useSession();
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/bizdata');
        setJsonData(response.data);
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="main" class="flex flex-row px-[40px] py-[40px] w-[1440px] h-[1024px] bg-offwhite">
      <div id="left-card" class="bg-black pl-[50px] py-[60px] w-[280px] h-[944px] rounded-[30px] flex flex-col flex-shrink-0">
        <div id="headtext-card" class="w-[123px] h-[44px]">
          <p class="text-white font-montserrat text-4xl not-italic font-bold">
            Board.
          </p>
        </div>
        <div id="menu-card" class="mt-[42px] w-full h-[270px]">
          <div id="menu-container-1" class="my-[20px] h-[22px] flex flex-nowrap">
            <div id="svg-container-1" class="py-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9.8995 0C9.66079 0 9.43186 0.0948265 9.26307 0.263619C9.09428 0.432411 8.99945 0.661343 8.99945 0.900051V8.10046C8.99945 8.33917 9.09428 8.5681 9.26307 8.73689C9.43186 8.90568 9.66079 9.00051 9.8995 9.00051H17.0999C17.3386 9.00051 17.5675 8.90568 17.7363 8.73689C17.9051 8.5681 18 8.33917 18 8.10046C18 5.95208 17.1465 3.8917 15.6274 2.37257C14.1083 0.853439 12.0479 0 9.8995 0ZM10.7996 7.20041V1.86311C12.1462 2.05717 13.3939 2.68195 14.3559 3.64402C15.318 4.60609 15.9428 5.85375 16.1369 7.20041H10.7996Z" fill="white"/>
                <path d="M16.9379 10.8546C16.8263 10.8147 16.7078 10.7972 16.5894 10.8032C16.4709 10.8093 16.3548 10.8386 16.2478 10.8896C16.1407 10.9406 16.0448 11.0123 15.9655 11.1005C15.8863 11.1887 15.8252 11.2917 15.7859 11.4036C15.3803 12.5502 14.6908 13.5754 13.7819 14.3835C12.873 15.1916 11.7741 15.7563 10.5879 16.0249C9.40176 16.2935 8.16686 16.2573 6.99846 15.9196C5.83006 15.5819 4.76623 14.9538 3.90623 14.0938C3.04623 13.2338 2.41809 12.1699 2.0804 11.0015C1.74271 9.83313 1.70648 8.59823 1.97509 7.41204C2.2437 6.22585 2.80839 5.12703 3.61649 4.21809C4.42459 3.30916 5.44976 2.61972 6.59636 2.21411C6.82193 2.13534 7.00698 1.97018 7.11079 1.75497C7.2146 1.53976 7.22866 1.29213 7.14989 1.06655C7.07111 0.840968 6.90595 0.65592 6.69074 0.552113C6.47553 0.448306 6.2279 0.434242 6.00232 0.513016C4.56858 1.01954 3.28654 1.88106 2.27585 3.01716C1.26517 4.15325 0.558799 5.52689 0.222663 7.00986C-0.113472 8.49283 -0.0684124 10.0368 0.353638 11.4976C0.775688 12.9585 1.56097 14.2886 2.63619 15.3638C3.71141 16.439 5.04151 17.2243 6.50235 17.6463C7.9632 18.0684 9.50716 18.1135 10.9901 17.7773C12.4731 17.4412 13.8467 16.7348 14.9828 15.7241C16.1189 14.7135 16.9804 13.4314 17.487 11.9977C17.5648 11.7732 17.5508 11.5271 17.4479 11.313C17.3451 11.0989 17.1618 10.9341 16.9379 10.8546Z" fill="white"/>
              </svg>
            </div>
            <div class="ml-[20px] flex items-center">
              <p class="font-montserrat text-lg font-bold not-italic text-white">
                Dashboard
              </p>
            </div>
          </div>
          <div id="menu-container-2" class="my-[20px] h-[22px] flex flex-nowrap">
            <div id="svg-container-2" class="my-[0.5px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
                <path d="M3.92365 5.43145C4.13877 5.64477 4.42946 5.76447 4.73242 5.76447C5.03538 5.76447 5.32607 5.64477 5.54119 5.43145C5.64713 5.32645 5.73121 5.20152 5.7886 5.06385C5.84598 4.92618 5.87552 4.77851 5.87552 4.62936C5.87552 4.48021 5.84598 4.33253 5.7886 4.19486C5.73121 4.0572 5.64713 3.93226 5.54119 3.82726C5.32607 3.61394 5.03538 3.49425 4.73242 3.49425C4.42946 3.49425 4.13877 3.61394 3.92365 3.82726C3.47846 4.27097 3.47846 4.98922 3.92365 5.43145ZM17.0139 12.1094C17.2912 11.8345 17.5114 11.5075 17.6617 11.147C17.8119 10.7866 17.8893 10.4 17.8893 10.0095C17.8893 9.61905 17.8119 9.23244 17.6617 8.87203C17.5114 8.51162 17.2912 8.18454 17.0139 7.9097L9.9501 0.890462C9.39144 0.336196 8.63723 0.0238498 7.85027 0.0208485L3.00655 7.26358e-05C2.61268 -0.00267806 2.22218 0.0727231 1.85765 0.221911C1.49312 0.371099 1.1618 0.591111 0.88287 0.869211C0.603943 1.14731 0.382946 1.47797 0.232676 1.84206C0.0824051 2.20615 0.0058403 2.59642 0.00741959 2.9903L0.0430355 7.99577C0.0494556 8.77667 0.364151 9.5234 0.918587 10.0733L7.87846 16.9887C8.44035 17.5453 9.19927 17.8576 9.99017 17.8576C10.7811 17.8576 11.54 17.5453 12.1019 16.9887L17.0139 12.1094ZM15.9573 8.95888C16.096 9.0963 16.206 9.25983 16.2812 9.44004C16.3563 9.62025 16.395 9.81355 16.395 10.0088C16.395 10.204 16.3563 10.3973 16.2812 10.5775C16.206 10.7578 16.096 10.9213 15.9573 11.0587L11.0453 15.941C10.4621 16.5198 9.51678 16.5198 8.93358 15.941L1.9737 9.02417C1.69696 8.749 1.54014 8.37564 1.53741 7.98538L1.50031 2.97991C1.49932 2.78282 1.53748 2.58749 1.61259 2.40527C1.68769 2.22305 1.79823 2.05756 1.93781 1.9184C2.07738 1.77924 2.2432 1.66919 2.42564 1.59463C2.60809 1.52006 2.80353 1.48248 3.00061 1.48406L7.84433 1.50483C8.23807 1.50614 8.61548 1.66232 8.89499 1.93964L15.9588 8.95888H15.9573ZM17.8122 12.9849C18.0116 13.5184 18.0532 14.098 17.9322 14.6546C17.8112 15.2111 17.5325 15.721 17.1296 16.1235L14.2151 19.0381C13.6639 19.5893 13.0095 20.0266 12.2893 20.3249C11.5691 20.6232 10.7972 20.7768 10.0176 20.7768C9.23808 20.7768 8.46617 20.6232 7.74597 20.3249C7.02577 20.0266 6.37139 19.5893 5.82018 19.0381L0.652954 13.8709C0.235384 13.4538 0.000518799 12.888 0 12.2978V11.1403L5.82018 16.9605C5.92257 17.0629 6.02794 17.1608 6.13479 17.2529L6.86936 17.9889C7.28277 18.4024 7.77358 18.7304 8.31377 18.9542C8.85395 19.1779 9.43292 19.2931 10.0176 19.2931C10.6023 19.2931 11.1813 19.1779 11.7215 18.9542C12.2617 18.7304 12.7525 18.4024 13.1659 17.9889L13.9064 17.2484C14.0126 17.1561 14.1156 17.06 14.2151 16.9605L17.1296 14.046C17.4308 13.7455 17.6637 13.3836 17.8122 12.9849Z" fill="white"/>
              </svg>
            </div>
            <div class="ml-[20px] flex items-center">
              <p class="font-montserrat text-lg font-normal not-italic text-white">
                Transactions
              </p>
            </div>
          </div>
          <div id="menu-container-3" class="my-[20px] h-[22px] flex flex-nowrap">
            <div id="svg-container-3" class="my-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M7.3 17.2H4.6C3.64522 17.2 2.72955 16.8207 2.05442 16.1456C1.37928 15.4704 1 14.5548 1 13.6V5.49999C1 4.54521 1.37928 3.62954 2.05442 2.95441C2.72955 2.27928 3.64522 1.89999 4.6 1.89999H14.5C15.4548 1.89999 16.3705 2.27928 17.0456 2.95441C17.7207 3.62954 18.1 4.54521 18.1 5.49999V8.19999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.40002 1V2.8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.7 1V2.8" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1 6.39999H18.1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15.85 13.2787L14.5 14.6287" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.5 19C16.9853 19 19 16.9853 19 14.5C19 12.0147 16.9853 10 14.5 10C12.0147 10 10 12.0147 10 14.5C10 16.9853 12.0147 19 14.5 19Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="ml-[20px] flex items-center">
              <p class="font-montserrat text-lg font-normal not-italic text-white">
                Schedules
              </p>
            </div>
          </div>
          <div id="menu-container-4" class="my-[20px] h-[22px] flex flex-nowrap">
            <div id="svg-container-4" class="my-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M8.99999 3.85715C8.36427 3.85715 7.74282 4.04566 7.21423 4.39885C6.68564 4.75204 6.27366 5.25405 6.03038 5.84138C5.7871 6.42871 5.72344 7.075 5.84747 7.69851C5.97149 8.32202 6.27762 8.89475 6.72715 9.34427C7.17668 9.7938 7.74941 10.0999 8.37292 10.224C8.99643 10.348 9.64271 10.2843 10.23 10.041C10.8174 9.79776 11.3194 9.38578 11.6726 8.85719C12.0258 8.32861 12.2143 7.70716 12.2143 7.07143C12.2143 6.21895 11.8756 5.40138 11.2728 4.79859C10.67 4.19579 9.85247 3.85715 8.99999 3.85715ZM8.99999 9C8.61856 9 8.24569 8.88689 7.92854 8.67498C7.61138 8.46307 7.36419 8.16186 7.21822 7.80946C7.07226 7.45706 7.03406 7.06929 7.10848 6.69519C7.18289 6.32108 7.36657 5.97744 7.63629 5.70773C7.906 5.43801 8.24964 5.25433 8.62375 5.17992C8.99785 5.1055 9.38562 5.1437 9.73802 5.28966C10.0904 5.43563 10.3916 5.68282 10.6035 5.99998C10.8155 6.31713 10.9286 6.69 10.9286 7.07143C10.9281 7.58276 10.7247 8.07301 10.3631 8.43457C10.0016 8.79614 9.51132 8.99949 8.99999 9Z" fill="white"/>
                <path d="M9 0C7.21997 0 5.47991 0.527841 3.99987 1.51677C2.51983 2.50571 1.36628 3.91131 0.685088 5.55585C0.00389955 7.20038 -0.17433 9.00998 0.172936 10.7558C0.520203 12.5016 1.37737 14.1053 2.63604 15.364C3.89471 16.6226 5.49836 17.4798 7.24419 17.8271C8.99002 18.1743 10.7996 17.9961 12.4442 17.3149C14.0887 16.6337 15.4943 15.4802 16.4832 14.0001C17.4722 12.5201 18 10.78 18 9C17.9973 6.61389 17.0482 4.32628 15.361 2.63905C13.6737 0.951808 11.3861 0.00272232 9 0ZM5.14286 15.6709V14.7857C5.14337 14.2744 5.34672 13.7841 5.70829 13.4226C6.06986 13.061 6.5601 12.8577 7.07143 12.8571H10.9286C11.4399 12.8577 11.9301 13.061 12.2917 13.4226C12.6533 13.7841 12.8566 14.2744 12.8571 14.7857V15.6709C11.6866 16.3544 10.3555 16.7146 9 16.7146C7.64453 16.7146 6.3134 16.3544 5.14286 15.6709ZM14.1377 14.7381C14.1249 13.8949 13.7814 13.0905 13.1811 12.4982C12.5808 11.9058 11.7719 11.573 10.9286 11.5714H7.07143C6.22812 11.573 5.41918 11.9058 4.81892 12.4982C4.21865 13.0905 3.8751 13.8949 3.86229 14.7381C2.69651 13.6972 1.8744 12.3267 1.50483 10.8081C1.13525 9.28958 1.23564 7.69458 1.7927 6.23434C2.34976 4.7741 3.33722 3.5175 4.62431 2.63094C5.91141 1.74437 7.43744 1.26966 9.00032 1.26966C10.5632 1.26966 12.0892 1.74437 13.3763 2.63094C14.6634 3.5175 15.6509 4.7741 16.2079 6.23434C16.765 7.69458 16.8654 9.28958 16.4958 10.8081C16.1262 12.3267 15.3041 13.6972 14.1384 14.7381H14.1377Z" fill="white"/>
              </svg>
            </div>
            <div class="ml-[20px] flex items-center">
              <p class="font-montserrat text-lg font-normal not-italic text-white">
                Users
              </p>
            </div>
          </div>
          <div id="menu-container-5" class="my-[20px] h-[22px] flex flex-nowrap">
            <div id="svg-container-5" class="my-[2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.8159 11.2879L15.5 10.1629C15.5622 9.78115 15.5944 9.39139 15.5944 9.00163C15.5944 8.61187 15.5622 8.22211 15.5 7.84039L16.8159 6.71531C16.9152 6.63034 16.9862 6.51717 17.0196 6.39084C17.053 6.26452 17.0471 6.13103 17.0027 6.00812L16.9847 5.95588C16.6224 4.94336 16.0799 4.00475 15.3834 3.18538L15.3473 3.14319C15.2628 3.04384 15.1502 2.97243 15.0243 2.93836C14.8984 2.90429 14.7652 2.90916 14.6421 2.95233L13.0087 3.53295C12.406 3.03872 11.733 2.64896 11.0057 2.37572L10.6903 0.668015C10.6665 0.53952 10.6041 0.421306 10.5115 0.329081C10.419 0.236855 10.3005 0.174983 10.1719 0.151685L10.1177 0.141639C9.07095 -0.0472131 7.96998 -0.0472131 6.92325 0.141639L6.86901 0.151685C6.74042 0.174983 6.62197 0.236855 6.52938 0.329081C6.4368 0.421306 6.37447 0.53952 6.35067 0.668015L6.03324 2.38376C5.31176 2.65705 4.63988 3.0466 4.04426 3.53696L2.39883 2.95233C2.27581 2.90881 2.14246 2.90377 2.0165 2.93786C1.89054 2.97195 1.77793 3.04357 1.69365 3.14319L1.65749 3.18538C0.961838 4.00533 0.419449 4.94379 0.056258 5.95588L0.0381763 6.00812C-0.0522317 6.25925 0.0221038 6.54052 0.22502 6.71531L1.55703 7.85244C1.49475 8.23015 1.46461 8.61589 1.46461 8.99962C1.46461 9.38536 1.49475 9.7711 1.55703 10.1468L0.22502 11.2839C0.125763 11.3689 0.0547239 11.4821 0.0213484 11.6084C-0.0120272 11.7347 -0.0061578 11.8682 0.0381763 11.9911L0.056258 12.0434C0.419899 13.0559 0.95833 13.9901 1.65749 14.8139L1.69365 14.8561C1.77814 14.9554 1.89075 15.0268 2.01663 15.0609C2.14252 15.095 2.27577 15.0901 2.39883 15.0469L4.04426 14.4623C4.64296 14.9545 5.31198 15.3443 6.03324 15.6155L6.35067 17.3312C6.37447 17.4597 6.4368 17.5779 6.52938 17.6702C6.62197 17.7624 6.74042 17.8243 6.86901 17.8476L6.92325 17.8576C7.97959 18.0475 9.06133 18.0475 10.1177 17.8576L10.1719 17.8476C10.3005 17.8243 10.419 17.7624 10.5115 17.6702C10.6041 17.5779 10.6665 17.4597 10.6903 17.3312L11.0057 15.6235C11.7327 15.351 12.4095 14.96 13.0087 14.4663L14.6421 15.0469C14.7651 15.0904 14.8985 15.0955 15.0244 15.0614C15.1504 15.0273 15.263 14.9557 15.3473 14.8561L15.3834 14.8139C16.0826 13.9881 16.621 13.0559 16.9847 12.0434L17.0027 11.9911C17.0932 11.744 17.0188 11.4627 16.8159 11.2879ZM14.0735 8.07746C14.1238 8.38083 14.1499 8.69223 14.1499 9.00364C14.1499 9.31504 14.1238 9.62645 14.0735 9.92982L13.9409 10.7355L15.4417 12.0192C15.2142 12.5434 14.927 13.0396 14.5858 13.4979L12.7214 12.8369L12.0906 13.3553C11.6104 13.7491 11.076 14.0585 10.4974 14.2754L9.73193 14.5627L9.37231 16.5115C8.80489 16.5758 8.23202 16.5758 7.6646 16.5115L7.30498 14.5587L6.54555 14.2674C5.97296 14.0504 5.44056 13.741 4.96441 13.3493L4.33356 12.8289L2.45709 13.4959C2.11555 13.0358 1.83027 12.5396 1.60123 12.0172L3.11808 10.7214L2.98749 9.91776C2.93927 9.61841 2.91315 9.30902 2.91315 9.00364C2.91315 8.69625 2.93726 8.38886 2.98749 8.08951L3.11808 7.28589L1.60123 5.99004C1.82826 5.46567 2.11555 4.97144 2.45709 4.51136L4.33356 5.17837L4.96441 4.65802C5.44056 4.26626 5.97296 3.95686 6.54555 3.73988L7.30698 3.45258L7.66661 1.49977C8.23116 1.43548 8.80776 1.43548 9.37432 1.49977L9.73394 3.44857L10.4994 3.73586C11.076 3.95284 11.6124 4.26224 12.0926 4.65602L12.7234 5.17435L14.5878 4.51337C14.9294 4.97345 15.2147 5.46969 15.4437 5.99205L13.9429 7.27584L14.0735 8.07746ZM8.52247 5.26677C6.56966 5.26677 4.98651 6.84992 4.98651 8.80273C4.98651 10.7555 6.56966 12.3387 8.52247 12.3387C10.4753 12.3387 12.0584 10.7555 12.0584 8.80273C12.0584 6.84992 10.4753 5.26677 8.52247 5.26677ZM10.1137 10.3939C9.90495 10.6032 9.65693 10.7692 9.38386 10.8823C9.11078 10.9954 8.81804 11.0533 8.52247 11.0529C7.92176 11.0529 7.35721 10.8178 6.93129 10.3939C6.72199 10.1852 6.55602 9.93719 6.44293 9.66412C6.32984 9.39104 6.27185 9.0983 6.27231 8.80273C6.27231 8.20202 6.50738 7.63747 6.93129 7.21155C7.35721 6.78563 7.92176 6.55258 8.52247 6.55258C9.12318 6.55258 9.68773 6.78563 10.1137 7.21155C10.323 7.42025 10.4889 7.66827 10.602 7.94135C10.7151 8.21442 10.7731 8.50716 10.7726 8.80273C10.7726 9.40344 10.5376 9.96799 10.1137 10.3939Z" fill="white"/>
              </svg>
            </div>
            <div class="ml-[20px] flex items-center">
              <p class="font-montserrat text-lg font-normal not-italic text-white">
                Settings
              </p>
            </div>
          </div>
        </div>
        <div id="contact-card" class="mt-auto w-full h-[54px] sticky bottom-0">
          <div class="">
            <p class="font-montserrat text-lg font-normal not-italic text-white">
              Help
            </p>
          </div>
          <div class="mt-[20px]">
            <p class="font-montserrat text-lg font-normal not-italic text-white">
              Contact Us
            </p>
          </div>
        </div>
      </div>

      <div id="right-card" class="pt-[20px] pb-[40px] pl-[60px] pr-[20px] w-[1080px] h-[944px] flex flex-col">
        <div id="header" class="w-full my-[20px] h-[30px] container flex justify-between">
          <div id="left-side" class="w-[138px] h-[29px] font-montserrat text-2xl font-bold not-italic text-black sticky left-0">
            <p>
              Dashboard
            </p>
          </div>
          <div id="right-side" class="sticky right-0 flex flex-nowrap">
            <div id="input-container" class="w-[180px] h-[30px] relative">
              <input type="text" placeholder="Search..." class="w-[180px] h-[30px] border-0 rounded-[10px] font-lato text-black placeholder-grey bg-white"/>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 13 12" fill="none" class="absolute top-[9px] right-[15px] bottom-[9px]">
                <circle cx="5" cy="5" r="4.5" stroke="#858585"/>
                <line x1="8.35355" y1="7.64645" x2="12.3536" y2="11.6464" stroke="#858585"/>
              </svg>
            </div>
            <div id="svg-container" class="ml-[30px] pt-[5px] w-[18px] h-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                <path d="M16 11.586V8C16 4.783 13.815 2.073 10.855 1.258C10.562 0.52 9.846 0 9 0C8.154 0 7.438 0.52 7.145 1.258C4.185 2.074 2 4.783 2 8V11.586L0.293001 13.293C0.199958 13.3857 0.126171 13.4959 0.0758854 13.6172C0.0256001 13.7386 -0.000189449 13.8687 1.04767e-06 14V16C1.04767e-06 16.2652 0.105358 16.5196 0.292894 16.7071C0.480431 16.8946 0.734785 17 1 17H17C17.2652 17 17.5196 16.8946 17.7071 16.7071C17.8946 16.5196 18 16.2652 18 16V14C18.0002 13.8687 17.9744 13.7386 17.9241 13.6172C17.8738 13.4959 17.8 13.3857 17.707 13.293L16 11.586ZM16 15H2V14.414L3.707 12.707C3.80004 12.6143 3.87383 12.5041 3.92412 12.3828C3.9744 12.2614 4.00019 12.1313 4 12V8C4 5.243 6.243 3 9 3C11.757 3 14 5.243 14 8V12C14 12.266 14.105 12.52 14.293 12.707L16 14.414V15ZM9 20C9.6193 20.0008 10.2235 19.8086 10.7285 19.4502C11.2335 19.0917 11.6143 18.5849 11.818 18H6.182C6.38566 18.5849 6.76648 19.0917 7.27151 19.4502C7.77654 19.8086 8.3807 20.0008 9 20Z" fill="black"/>
              </svg>
            </div>
            <div id="img-container" class="ml-[29px] w-[30px] h-[30px] rounded-full flex-shrink-0 bg-grey">
              <button id="dropdownHoverButton" data-dropdown-toggle="hover" class="w-full h-full rounded-full bg-transparent focus:outline-none  inline-flex items-center" type="button">
                <img src={session.user.image} class="w-[30px] h-[30px] rounded-full object-cover" />
              </button>
              <div id="dropdown" class="z-1 bg-white hidden divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 overflow-auto">
                  <ul class="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{session.user.name}</a>
                    </li>
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{session.user.email}</a>
                    </li>
                    <li>
                      <button onClick={() => signOut()} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</button>
                    </li>
                  </ul>
              </div>
              {/* <button onClick={() => signOut()} class="w-full h-full rounded-full bg-transparent">
                <img src={session.user.image} class="w-[30px] h-[30px] rounded-full object-cover" />
              </button> */}
              {/* <div id="dropdown-content" class="hidden absolute w-full overflow-auto shadow-md">
                <p class="block px-4 py-2 text-black no-underline">Name: {session.user.name}</p>
                <p class="block px-4 py-2 text-black no-underline">{session.user.email}</p>
                <button onClick={() => signOut()} class="block px-4 py-2 text-black no-underline">Sign Out</button>
              </div> */}
            </div>
          </div>
        </div>
        <div id="cards-row" class="w-full my-[20px] h-[120px] flex flex-wrap justify-between">
            <div class="mx-0 py-[20px] pl-[25px] h-full w-[221.053px] rounded-[20px] bg-green">
              <div class="relative w-full h-[24px]">
                <div id="svg-container" class="absolute w-[26.4px] h-[24px] left-[144px] right-[25.65px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26.4" height="24" viewBox="0 0 27 24" fill="none">
                    <path d="M13.2 12C12.488 12 11.792 12.2111 11.1999 12.6067C10.6079 13.0023 10.1465 13.5645 9.87403 14.2223C9.60156 14.8802 9.53026 15.604 9.66917 16.3023C9.80808 17.0007 10.1509 17.6421 10.6544 18.1456C11.1579 18.6491 11.7993 18.9919 12.4977 19.1308C13.196 19.2697 13.9198 19.1984 14.5777 18.926C15.2355 18.6535 15.7977 18.1921 16.1933 17.6001C16.5889 17.008 16.8 16.312 16.8 15.6C16.8 14.6452 16.4207 13.7295 15.7456 13.0544C15.0705 12.3793 14.1548 12 13.2 12ZM13.2 16.8C12.9627 16.8 12.7307 16.7296 12.5333 16.5978C12.336 16.4659 12.1822 16.2785 12.0913 16.0592C12.0005 15.8399 11.9768 15.5987 12.0231 15.3659C12.0694 15.1331 12.1836 14.9193 12.3515 14.7515C12.5193 14.5836 12.7331 14.4694 12.9659 14.4231C13.1987 14.3768 13.4399 14.4005 13.6592 14.4913C13.8785 14.5822 14.0659 14.736 14.1978 14.9333C14.3296 15.1307 14.4 15.3627 14.4 15.6C14.4 15.9183 14.2736 16.2235 14.0485 16.4485C13.8235 16.6736 13.5183 16.8 13.2 16.8ZM12.348 9.252C12.4621 9.36125 12.5967 9.44689 12.744 9.504C12.8876 9.56749 13.043 9.60028 13.2 9.60028C13.357 9.60028 13.5124 9.56749 13.656 9.504C13.8033 9.44689 13.9379 9.36125 14.052 9.252L16.8 6.552C17.0323 6.31967 17.1628 6.00456 17.1628 5.676C17.1628 5.34744 17.0323 5.03233 16.8 4.8C16.5677 4.56767 16.2526 4.43715 15.924 4.43715C15.5954 4.43715 15.2803 4.56767 15.048 4.8L14.4 5.508V1.2C14.4 0.88174 14.2736 0.576515 14.0485 0.351472C13.8235 0.126428 13.5183 0 13.2 0C12.8817 0 12.5765 0.126428 12.3515 0.351472C12.1264 0.576515 12 0.88174 12 1.2V5.508L11.352 4.8C11.1197 4.56767 10.8046 4.43715 10.476 4.43715C10.1474 4.43715 9.83233 4.56767 9.6 4.8C9.36767 5.03233 9.23715 5.34744 9.23715 5.676C9.23715 6.00456 9.36767 6.31967 9.6 6.552L12.348 9.252ZM21.6 15.6C21.6 15.3627 21.5296 15.1307 21.3978 14.9333C21.2659 14.736 21.0785 14.5822 20.8592 14.4913C20.6399 14.4005 20.3987 14.3768 20.1659 14.4231C19.9331 14.4694 19.7193 14.5836 19.5515 14.7515C19.3836 14.9193 19.2694 15.1331 19.2231 15.3659C19.1768 15.5987 19.2005 15.8399 19.2913 16.0592C19.3822 16.2785 19.536 16.4659 19.7333 16.5978C19.9307 16.7296 20.1627 16.8 20.4 16.8C20.7183 16.8 21.0235 16.6736 21.2485 16.4485C21.4736 16.2235 21.6 15.9183 21.6 15.6ZM22.8 7.2H19.2C18.8817 7.2 18.5765 7.32643 18.3515 7.55147C18.1264 7.77652 18 8.08174 18 8.4C18 8.71826 18.1264 9.02348 18.3515 9.24853C18.5765 9.47357 18.8817 9.6 19.2 9.6H22.8C23.1183 9.6 23.4235 9.72643 23.6485 9.95147C23.8736 10.1765 24 10.4817 24 10.8V20.4C24 20.7183 23.8736 21.0235 23.6485 21.2485C23.4235 21.4736 23.1183 21.6 22.8 21.6H3.6C3.28174 21.6 2.97652 21.4736 2.75147 21.2485C2.52643 21.0235 2.4 20.7183 2.4 20.4V10.8C2.4 10.4817 2.52643 10.1765 2.75147 9.95147C2.97652 9.72643 3.28174 9.6 3.6 9.6H7.2C7.51826 9.6 7.82348 9.47357 8.04853 9.24853C8.27357 9.02348 8.4 8.71826 8.4 8.4C8.4 8.08174 8.27357 7.77652 8.04853 7.55147C7.82348 7.32643 7.51826 7.2 7.2 7.2H3.6C2.64522 7.2 1.72955 7.57928 1.05442 8.25442C0.379285 8.92955 0 9.84522 0 10.8V20.4C0 21.3548 0.379285 22.2705 1.05442 22.9456C1.72955 23.6207 2.64522 24 3.6 24H22.8C23.7548 24 24.6705 23.6207 25.3456 22.9456C26.0207 22.2705 26.4 21.3548 26.4 20.4V10.8C26.4 9.84522 26.0207 8.92955 25.3456 8.25442C24.6705 7.57928 23.7548 7.2 22.8 7.2ZM4.8 15.6C4.8 15.8373 4.87038 16.0693 5.00224 16.2667C5.13409 16.464 5.32151 16.6178 5.54078 16.7087C5.76005 16.7995 6.00133 16.8232 6.23411 16.7769C6.46689 16.7306 6.6807 16.6164 6.84853 16.4485C7.01635 16.2807 7.13064 16.0669 7.17694 15.8341C7.22324 15.6013 7.19948 15.3601 7.10865 15.1408C7.01783 14.9215 6.86402 14.7341 6.66668 14.6022C6.46934 14.4704 6.23734 14.4 6 14.4C5.68174 14.4 5.37652 14.5264 5.15147 14.7515C4.92643 14.9765 4.8 15.2817 4.8 15.6Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div class="pt-[1px] pb-[5px] h-[23px] relative">
                <div class="absolute left-0">
                  <p class="font-lato text-sm font-normal not-italic text-black">
                    Total Revenues
                  </p>
                </div>
              </div>
              <div class="h-[33px] relative">
                <div class="absolute flex flex-nowrap">
                  <p class="font-opensans text-2xl font-bold text-black flex">
                    $
                    <span id="revenue" class="flex">{jsonData[0]?.['1']}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="py-[20px] pl-[25px] h-full w-[221.053px] rounded-[20px] bg-yellow">
            <div class="relative w-full h-[24px]">
                <div id="svg-container" class="absolute w-[20.79px] h-[24px] left-[150.11px] right-[25.15px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20.79" height="24" viewBox="0 0 21 24" fill="none">
                    <path d="M4.53233 6.27406C4.78083 6.52048 5.11661 6.65874 5.46657 6.65874C5.81653 6.65874 6.15232 6.52048 6.40081 6.27406C6.52318 6.15278 6.62031 6.00845 6.6866 5.84943C6.75288 5.6904 6.78701 5.51982 6.78701 5.34753C6.78701 5.17524 6.75288 5.00466 6.6866 4.84564C6.62031 4.68661 6.52318 4.54229 6.40081 4.42101C6.15232 4.17459 5.81653 4.03633 5.46657 4.03633C5.11661 4.03633 4.78083 4.17459 4.53233 4.42101C4.01807 4.93355 4.01807 5.76323 4.53233 6.27406ZM19.6533 13.988C19.9737 13.6705 20.228 13.2927 20.4016 12.8763C20.5752 12.46 20.6645 12.0134 20.6645 11.5624C20.6645 11.1113 20.5752 10.6647 20.4016 10.2484C20.228 9.83207 19.9737 9.45425 19.6533 9.13677L11.4937 1.0286C10.8484 0.388352 9.97715 0.0275497 9.06811 0.0240828L3.47296 8.39041e-05C3.01798 -0.00309353 2.5669 0.084005 2.14582 0.256338C1.72474 0.42867 1.34202 0.682813 1.01982 1.00406C0.697618 1.3253 0.442341 1.70726 0.268757 2.12783C0.0951729 2.5484 0.00673103 2.99922 0.00855446 3.4542L0.049696 9.2362C0.0571117 10.1382 0.420628 11.0008 1.06108 11.6361L9.10068 19.6243C9.74973 20.2672 10.6264 20.6279 11.54 20.6279C12.4536 20.6279 13.3302 20.2672 13.9793 19.6243L19.6533 13.988ZM18.4328 10.3487C18.593 10.5075 18.7202 10.6964 18.8069 10.9045C18.8937 11.1127 18.9384 11.336 18.9384 11.5615C18.9384 11.787 18.8937 12.0103 18.8069 12.2185C18.7202 12.4267 18.593 12.6156 18.4328 12.7743L12.7588 18.414C12.0851 19.0826 10.9932 19.0826 10.3195 18.414L2.27987 10.4241C1.9602 10.1063 1.77906 9.67499 1.7759 9.2242L1.73304 3.4422C1.7319 3.21453 1.77598 2.98891 1.86274 2.77841C1.94949 2.56792 2.07719 2.37676 2.23841 2.21601C2.39964 2.05526 2.59118 1.92814 2.80193 1.84201C3.01268 1.75588 3.23844 1.71247 3.4661 1.71428L9.06125 1.73828C9.51607 1.73979 9.95203 1.92021 10.2749 2.24054L18.4345 10.3487H18.4328ZM20.5755 14.9993C20.8058 15.6156 20.8539 16.2851 20.7141 16.928C20.5743 17.5709 20.2524 18.1599 19.787 18.6249L16.4203 21.9916C15.7836 22.6283 15.0277 23.1334 14.1958 23.478C13.3638 23.8226 12.4722 24 11.5717 24C10.6712 24 9.77956 23.8226 8.94763 23.478C8.1157 23.1334 7.3598 22.6283 6.72308 21.9916L0.754234 16.0227C0.271885 15.541 0.000585556 14.8874 -1.52588e-05 14.2057V12.8686L6.72308 19.5917C6.84136 19.71 6.96307 19.8231 7.08649 19.9294L7.93502 20.7796C8.41257 21.2572 8.97952 21.6361 9.60351 21.8946C10.2275 22.1531 10.8963 22.2862 11.5717 22.2862C12.2471 22.2862 12.9159 22.1531 13.5399 21.8946C14.1639 21.6361 14.7308 21.2572 15.2084 20.7796L16.0638 19.9242C16.1864 19.8176 16.3054 19.7066 16.4203 19.5917L19.787 16.225C20.1349 15.8779 20.4039 15.4599 20.5755 14.9993Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div class="pt-[1px] pb-[5px] h-[23px] relative">
                <div class="absolute left-0">
                  <p class="font-lato text-sm font-normal not-italic text-black">
                    Total Transactions
                  </p>
                </div>
              </div>
              <div class="h-[33px] relative">
                <div class="absolute flex flex-nowrap">
                  <p class="font-opensans text-2xl font-bold text-black flex">
                    <span id="transactions" class="flex">{jsonData[1]?.['2']}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="mx-0 py-[20px] pl-[25px] h-full w-[221.053px] rounded-[20px] bg-pink">
            <div class="relative w-full h-[24px]">
                <div id="svg-container" class="absolute w-[23.298px] h-[24px] left-[147.2px] right-[25.54px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.298" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22.538 12.6334C23.0273 11.9869 23.2981 11.1948 23.2981 10.3706C23.2981 9.06299 22.5671 7.82528 21.3906 7.13507C21.0877 6.95741 20.7428 6.8639 20.3917 6.86423H13.4081L13.5828 3.28506C13.6236 2.42011 13.3178 1.59886 12.7237 0.972718C12.4321 0.6641 12.0804 0.418552 11.6902 0.251249C11.3 0.0839457 10.8796 -0.0015581 10.455 2.1493e-05C8.94066 2.1493e-05 7.60101 1.01931 7.19912 2.47836L4.69748 11.5355H0.931925C0.416454 11.5355 0 11.952 0 12.4674V23.0681C0 23.5835 0.416454 24 0.931925 24H18.4434C18.7113 24 18.9734 23.9476 19.2151 23.8427C20.6014 23.2515 21.4954 21.8973 21.4954 20.3946C21.4954 20.0277 21.443 19.6665 21.3382 19.3171C21.8274 18.6706 22.0983 17.8784 22.0983 17.0542C22.0983 16.6873 22.0459 16.3262 21.941 15.9767C22.4303 15.3302 22.7011 14.5381 22.7011 13.7139C22.6953 13.3469 22.6429 12.9829 22.538 12.6334ZM2.09683 21.9032V13.6323H4.45577V21.9032H2.09683ZM20.6305 11.6229L19.9927 12.1762L20.3975 12.9159C20.5309 13.1596 20.6 13.4332 20.5985 13.711C20.5985 14.1915 20.3888 14.6487 20.0277 14.9632L19.3899 15.5166L19.7947 16.2563C19.928 16.5 19.9972 16.7736 19.9956 17.0513C19.9956 17.5319 19.7859 17.9891 19.4248 18.3036L18.787 18.8569L19.1918 19.5967C19.3252 19.8403 19.3943 20.1139 19.3928 20.3917C19.3928 21.0441 19.0084 21.6323 18.4143 21.9003H6.31962V13.5391L9.21732 3.04043C9.29204 2.77133 9.45244 2.53393 9.67421 2.36419C9.89598 2.19445 10.167 2.10162 10.4463 2.09976C10.6676 2.09976 10.886 2.16383 11.0608 2.29489C11.3491 2.51039 11.5034 2.83657 11.486 3.18313L11.2064 8.96106H20.3626C20.8809 9.2785 21.2013 9.81436 21.2013 10.3706C21.2013 10.8511 20.9916 11.3054 20.6305 11.6229Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div class="pt-[1px] pb-[5px] h-[23px] relative">
                <div class="absolute left-0">
                  <p class="font-lato text-sm font-normal not-italic text-black">
                    Total Likes
                  </p>
                </div>
              </div>
              <div class="h-[33px] relative">
                <div class="absolute flex flex-nowrap">
                  <p class="font-opensans text-2xl font-bold text-black flex">
                    <span id="likes" class="flex">{jsonData[2]?.['3']}</span>
                  </p>
                </div>
              </div>
            </div>
            <div class="mx-0 py-[20px] pl-[25px] h-full w-[221.053px] rounded-[20px] bg-purple">
            <div class="relative w-full h-[24px]">
                <div id="svg-container" class="absolute w-[36.8px] h-[24px] left-[134px] right-[25.18px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="36.8" height="24" viewBox="0 0 37 24" fill="none">
                    <path d="M17.258 16.762C18.8939 15.6753 20.1365 14.0908 20.802 12.243C21.4674 10.3952 21.5202 8.38221 20.9526 6.50202C20.3851 4.62183 19.2273 2.97432 17.6506 1.80331C16.0739 0.632294 14.1621 0 12.1981 0C10.2341 0 8.32234 0.632294 6.74566 1.80331C5.16897 2.97432 4.01117 4.62183 3.44361 6.50202C2.87605 8.38221 2.92889 10.3952 3.5943 12.243C4.25971 14.0908 5.50235 15.6753 7.1383 16.762C4.34954 17.7907 1.93924 19.6426 0.226895 22.0723C0.133477 22.2032 0.066866 22.3512 0.0308976 22.508C-0.00507071 22.6647 -0.00968636 22.827 0.0173165 22.9855C0.0443194 23.144 0.102407 23.2956 0.188236 23.4316C0.274066 23.5675 0.385941 23.6852 0.517422 23.7777C0.648903 23.8703 0.797392 23.9359 0.954343 23.9709C1.11129 24.0058 1.2736 24.0094 1.43193 23.9813C1.59026 23.9533 1.74148 23.8942 1.87688 23.8075C2.01229 23.7208 2.1292 23.6081 2.22089 23.476C3.34616 21.8752 4.84008 20.5687 6.57652 19.6668C8.31297 18.7648 10.2409 18.2939 12.1977 18.2939C14.1544 18.2938 16.0824 18.7646 17.8189 19.6664C19.5554 20.5683 21.0494 21.8747 22.1748 23.4754C22.2669 23.6065 22.3839 23.7182 22.5192 23.8041C22.6545 23.8899 22.8054 23.9483 22.9633 23.9758C23.1211 24.0032 23.2828 23.9994 23.4392 23.9643C23.5956 23.9293 23.7435 23.8637 23.8745 23.7715C24.0055 23.6792 24.117 23.562 24.2027 23.4266C24.2884 23.2912 24.3466 23.1403 24.3739 22.9824C24.4012 22.8245 24.3972 22.6628 24.3619 22.5065C24.3267 22.3501 24.261 22.2023 24.1686 22.0714C22.4563 19.6421 20.0463 17.7905 17.258 16.7618V16.762ZM5.49195 9.14935C5.49195 7.82301 5.88525 6.52645 6.62213 5.42364C7.35901 4.32082 8.40636 3.46129 9.63174 2.95372C10.8571 2.44615 12.2055 2.31335 13.5063 2.5721C14.8072 2.83086 16.0021 3.46955 16.94 4.40742C17.8778 5.34528 18.5165 6.5402 18.7753 7.84105C19.0341 9.14191 18.9013 10.4903 18.3937 11.7157C17.8861 12.941 17.0266 13.9884 15.9238 14.7253C14.821 15.4621 13.5244 15.8555 12.1981 15.8555C10.4201 15.8534 8.71555 15.1463 7.45835 13.8891C6.20115 12.6319 5.49397 10.9273 5.49195 9.14935ZM36.2986 23.7705C36.1677 23.8627 36.0199 23.9282 35.8636 23.9633C35.7074 23.9984 35.5458 24.0023 35.388 23.9749C35.2302 23.9476 35.0794 23.8894 34.9442 23.8037C34.8089 23.718 34.6918 23.6065 34.5996 23.4756C33.4729 21.8763 31.9787 20.5709 30.2426 19.6692C28.5065 18.7676 26.5792 18.2959 24.6229 18.294C24.2996 18.294 23.9894 18.1656 23.7608 17.9369C23.5321 17.7083 23.4036 17.3981 23.4036 17.0747C23.4036 16.7514 23.5321 16.4412 23.7608 16.2126C23.9894 15.9839 24.2996 15.8555 24.6229 15.8555C25.5806 15.8544 26.5269 15.6482 27.3982 15.2508C28.2694 14.8535 29.0455 14.2741 29.6742 13.5517C30.3028 12.8293 30.7695 11.9807 31.0427 11.0628C31.316 10.145 31.3895 9.17931 31.2583 8.23071C31.1271 7.28211 30.7943 6.3726 30.2822 5.56338C29.7701 4.75416 29.0907 4.064 28.2896 3.53933C27.4885 3.01466 26.5843 2.66765 25.6378 2.52165C24.6914 2.37565 23.7247 2.43404 22.8027 2.6929C22.4918 2.77911 22.1595 2.73862 21.8784 2.58029C21.5973 2.42196 21.3905 2.15869 21.3031 1.84815C21.2157 1.53761 21.255 1.20511 21.4123 0.923458C21.5696 0.641807 21.8321 0.433966 22.1423 0.345454C24.2398 -0.24633 26.4797 -0.0694359 28.4583 0.844256C30.4368 1.75795 32.024 3.34834 32.9336 5.32879C33.8433 7.30924 34.0156 9.54948 33.4196 11.6458C32.8235 13.742 31.4983 15.5564 29.6827 16.762C32.4711 17.7906 34.8812 19.6423 36.5935 22.0716C36.7797 22.336 36.8532 22.6635 36.7979 22.9821C36.7426 23.3007 36.563 23.5843 36.2986 23.7705Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div class="pt-[1px] pb-[5px] h-[23px] relative">
                <div class="absolute left-0">
                  <p class="font-lato text-sm font-normal not-italic text-black">
                    Total Users
                  </p>
                </div>
              </div>
              <div class="h-[33px] relative">
                <div class="absolute flex flex-nowrap">
                  <p class="font-opensans text-2xl font-bold text-black flex">
                    <span id="users" class="flex">{jsonData[3]?.['4']}</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
        <div id="line-chart" class="pt-[30px] pl-[40px] pb-[25px] pr-[42px] w-full my-[20px] h-[359px] justify-center items-center flex-shrink-0 rounded-[20px] bg-white">
          <div id="chart-header" class="w-[93px] h-[22px] ">
            <p class="font-montserrat text-lg font-bold not-italic">
              Activities
            </p>
          </div>
          <div id="chart" class="h-[282px]">
              <Linechart />
          </div>
        </div>
        <div id="pie-chart-row" class="w-full my-[20px] h-[256px] flex flex-wrap justify-between">
          <div class="pt-[31px] pl-[40px] pr-[43px] pb-[34px] h-full w-[480px] rounded-[20px] bg-white">
            <div class="w-full h-[42px]">
              <p class="font-montserrat text-lg font-bold not-italic text-black">
                Top products
              </p>
            </div>
            <div id="pie-chart" class="w-full h-[150px]">
              <PieChart />
            </div>
          </div>
          <div class="pt-[30px] pl-[40px] pr-[30px] pb-[34px] h-full w-[480px] rounded-[20px] bg-white">
            <div class="w-full h-[47px]">
              <p class="font-montserrat text-lg font-bold not-italic text-black">
                Today's schedule
              </p>
            </div>
            <div id="calendar" class="w-full h-[145px] grid grid-rows-2 gap-y-[13px]">
              <div class="border-l-[5px] pl-[15px] py-[5.5px] w-full h-[66px] border-lightgreen">
                <div class="h-[55px] grid grid-rows-3 gap-y-[5px]">
                  <div class="h-[17px]">
                    <p class="font-lato text-sm font-bold text-darkgrey">
                    Meeting with suppliers from Kuta Bali
                    </p>
                  </div>
                  <div class="h-[14px]">
                    <p class="font-lato text-xs font-normal text-grey2">
                    14.00-15.00
                    </p>
                  </div>
                  <div class="h-[14px]">
                    <p class="font-lato text-xs font-normal text-grey2">
                    at Sunset Road, Kuta, Bali 
                    </p>
                  </div>
                </div>
              </div>
              <div class="border-l-[5px] pl-[15px] py-[5.5px] w-full h-[66px] border-blue">
              <div class="h-[55px] grid grid-rows-3 gap-y-[5px]">
                  <div class="h-[17px]">
                    <p class="font-lato text-sm font-bold text-darkgrey">
                    Check operation at Giga Factory 1
                    </p>
                  </div>
                  <div class="h-[14px]">
                    <p class="font-lato text-xs font-normal text-grey2">
                    18.00-20.00
                    </p>
                  </div>
                  <div class="h-[14px]">
                    <p class="font-lato text-xs font-normal text-grey2">
                    at Central Jakarta 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Dashboard;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/signin',
      },
    };
  }
  return {
    props: {session},
  };
};
