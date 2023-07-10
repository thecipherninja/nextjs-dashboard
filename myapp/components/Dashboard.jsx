import React from 'react'

const Dashboard = () => {
    return (
//         <div class="w-[1440px] h-[1024px] relative bg-neutral-100">
//   <div class="w-[280px] h-[944px] left-[40px] top-[40px] absolute">
//     <div class="w-[280px] h-[944px] left-0 top-0 absolute bg-black rounded-[30px]"></div>
//     <div class="left-[50px] top-[830px] absolute text-white text-[14px] font-normal">Help</div>
//     <div class="left-[50px] top-[867px] absolute text-white text-[14px] font-normal">Contact Us</div>
//     <div class="left-[88px] top-[412px] absolute text-white text-[18px] font-normal">Settings</div>
//     <div class="left-[88px] top-[350px] absolute text-white text-[18px] font-normal">Users</div>
//     <div class="left-[88px] top-[288px] absolute text-white text-[18px] font-normal">Schedules</div>
//     <div class="left-[88px] top-[226px] absolute text-white text-[18px] font-normal">Transactions</div>
//     <div class="left-[88px] top-[164px] absolute text-white text-[18px] font-bold">Dashboard</div>
//     <div class="w-[18px] h-[18px] left-[50px] top-[290px] absolute">
//     </div>
//     <div class="w-[18px] h-[18px] left-[50px] top-[166px] absolute">
//     </div>
//     <div class="w-[18px] h-[18px] left-[50px] top-[352px] absolute">
//     </div>
//     <div class="left-[50px] top-[60px] absolute text-white text-[36px] font-bold">Board.</div>
//   </div>
//   <div class="w-[221.05px] h-[120px] left-[637.89px] top-[129px] absolute">
//     <div class="w-[221.05px] h-[120px] left-0 top-0 absolute">
//       <div class="w-[221.05px] h-[120px] left-0 top-0 absolute bg-orange-100 rounded-2xl"></div>
//     </div>
//     <div class="w-[126px] left-[25.11px] top-[45px] absolute text-black text-[14px] font-normal">Total Transactions</div>
//     <div class="w-[65.26px] left-[25.11px] top-[67px] absolute text-black text-[24px] font-bold">1,520</div>
//   </div>
//   <div class="w-[221.05px] h-[120px] left-[380px] top-[129px] absolute">
//     <div class="w-[221.05px] h-[120px] left-0 top-0 absolute">
//       <div class="w-[221.05px] h-[120px] left-0 top-0 absolute bg-neutral-200 rounded-2xl"></div>
//     </div>
//     <div class="w-[124px] left-[25px] top-[45px] absolute text-black text-[14px] font-normal">Total Revenues</div>
//     <div class="w-[124px] left-[25px] top-[67px] absolute text-black text-[24px] font-bold">$2,129,430</div>
//   </div>
//   <div class="w-[221.05px] h-[120px] left-[895.79px] top-[129px] absolute">
//     <div class="w-[221.05px] h-[120px] left-0 top-0 absolute">
//       <div class="w-[221.05px] h-[120px] left-0 top-0 absolute bg-stone-200 rounded-2xl"></div>
//     </div>
//     <div class="w-[81px] left-[25.21px] top-[45px] absolute text-black text-[14px] font-normal">Total Likes</div>
//     <div class="w-[65.26px] left-[25.58px] top-[67px] absolute text-black text-[24px] font-bold">9,721</div>
//   </div>
//   <div class="w-[221.05px] h-[120px] left-[1158.95px] top-[129px] absolute">
//     <div class="w-[221.05px] h-[120px] left-0 top-0 absolute">
//       <div class="w-[221.05px] h-[120px] left-0 top-0 absolute bg-slate-200 rounded-2xl"></div>
//     </div>
//     <div class="w-[85.26px] left-[25.58px] top-[45px] absolute text-black text-[14px] font-normal">Total Users</div>
//     <div class="w-[44.21px] left-[25.58px] top-[67px] absolute text-black text-[24px] font-bold">892</div>
//   </div>
//   <div class="w-[1000px] h-[359px] left-[380px] top-[289px] absolute">
//     <div class="w-[1000px] h-[359px] left-0 top-0 absolute justify-center items-center inline-flex">
//       <div class="w-[1000px] h-[359px] bg-white rounded-2xl"></div>
//     </div>
//     <div class="w-[42px] left-[808px] top-[49px] absolute text-black text-[14px] font-normal">Guest</div>
//     <div class="w-[34px] left-[906px] top-[49px] absolute text-black text-[14px] font-normal">User</div>
//     <div class="w-[93px] left-[40px] top-[30px] absolute text-black text-[18px] font-bold">Activities</div>
//     <div class="w-[124px] h-[17px] left-[40px] top-[57px] absolute">
//       <div class="w-[111px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">May - June 2021</div>
//     </div>
//     <div class="w-[921px] h-[212px] left-[40px] top-[105px] absolute">
//       <div class="w-[921px] h-[17px] left-0 top-0 absolute">
//         <div class="w-[25.34px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">500</div>
//         <div class="w-[881px] h-[0px] left-[40px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//       <div class="w-[921px] h-[17px] left-0 top-[78px] absolute">
//         <div class="w-[25.34px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">300</div>
//         <div class="w-[881px] h-[0px] left-[40px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//       <div class="w-[921px] h-[17px] left-0 top-[39px] absolute">
//         <div class="w-[25.34px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">400</div>
//         <div class="w-[881px] h-[0px] left-[40px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//       <div class="w-[921px] h-[17px] left-0 top-[117px] absolute">
//         <div class="w-[25.34px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">200</div>
//         <div class="w-[881px] h-[0px] left-[40px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//       <div class="w-[921px] h-[17px] left-0 top-[156px] absolute">
//         <div class="w-[25.34px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">100</div>
//         <div class="w-[881px] h-[0px] left-[40px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//       <div class="w-[903.77px] h-[17px] left-[17.23px] top-[195px] absolute">
//         <div class="w-[9.12px] left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">0</div>
//         <div class="w-[881px] h-[0px] left-[22.77px] top-[10px] absolute border border-gray-200"></div>
//       </div>
//     </div>
//     <div class="w-2.5 h-2.5 left-[787.53px] top-[54px] absolute bg-red-300 rounded-full"></div>
//     <div class="w-2.5 h-2.5 left-[885px] top-[54px] absolute bg-lime-300 rounded-full"></div>
//   </div>
//   <div class="w-[480px] h-64 left-[380px] top-[688px] absolute">
//     <div class="w-[480px] h-64 left-0 top-0 absolute justify-center items-center inline-flex">
//       <div class="w-[480px] h-64 bg-white rounded-2xl"></div>
//     </div>
//     <div class="w-[98px] h-9 left-[244px] top-[72px] absolute">
//       <div class="w-[11px] h-[11px] left-0 top-[3px] absolute bg-green-300 rounded-full"></div>
//       <div class="left-[21px] top-0 absolute text-black text-[14px] font-bold">Basic Tees</div>
//       <div class="left-[21px] top-[22px] absolute text-zinc-500 text-[12px] font-normal">55%</div>
//     </div>
//     <div class="w-[97px] left-[327px] top-[31px] absolute text-zinc-500 text-[12px] font-normal">May - June 2021</div>
//     <div class="w-[168px] h-9 left-[244px] top-[129px] absolute">
//       <div class="w-[11px] h-[11px] left-0 top-[3px] absolute bg-amber-200 rounded-full"></div>
//       <div class="left-[21px] top-0 absolute text-black text-[14px] font-bold">Custom Short Pants</div>
//       <div class="left-[21px] top-[22px] absolute text-zinc-500 text-[12px] font-normal">31%</div>
//     </div>
//     <div class="w-32 h-9 left-[244px] top-[186px] absolute">
//       <div class="w-[11px] h-[11px] left-0 top-[3px] absolute bg-rose-400 rounded-full"></div>
//       <div class="left-[21px] top-0 absolute text-black text-[14px] font-bold">Super Hoodies</div>
//       <div class="left-[21px] top-[22px] absolute text-zinc-500 text-[12px] font-normal">14%</div>
//     </div>
//     <div class="left-[40px] top-[30px] absolute text-black text-[18px] font-bold">Top products</div>
//     <div class="origin-top-left rotate-180 w-[134px] h-[134px] left-[194px] top-[216px] absolute">
//       <div class="w-[134px] h-[134px] left-0 top-0 absolute origin-top-left rotate-180 bg-stone-300 rounded-full"></div>
//       <div class="w-[145.94px] h-[145.94px] left-[6.63px] top-[5.31px] absolute origin-top-left rotate-180 bg-green-300"></div>
//     </div>
//   </div>
//   <div class="w-[480px] h-64 left-[900px] top-[688px] absolute">
//     <div class="w-[480px] h-64 left-0 top-0 absolute justify-center items-center inline-flex">
//       <div class="w-[480px] h-64 bg-white rounded-2xl"></div>
//     </div>
//     <div class="left-[40px] top-[30px] absolute text-black text-[18px] font-bold">Today’s schedule</div>
//     <div class="w-[251px] h-[66px] left-[40px] top-[77px] absolute">
//       <div class="left-[15px] top-[3px] absolute text-stone-500 text-[14px] font-bold">Meeting with suppliers from Kuta Bali</div>
//       <div class="left-[15px] top-[25px] absolute text-neutral-400 text-[12px] font-normal">14.00-15.00</div>
//       <div class="left-[15px] top-[44px] absolute text-neutral-400 text-[12px] font-normal">at Sunset Road, Kuta, Bali </div>
//       <div class="w-[66px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border-2 border-lime-300"></div>
//     </div>
//     <div class="left-[398px] top-[34px] absolute text-zinc-500 text-[12px] font-normal">See All</div>
//     <div class="w-[227px] h-[66px] left-[40px] top-[156px] absolute">
//       <div class="left-[15px] top-[3px] absolute text-stone-500 text-[14px] font-bold">Check operation at Giga Factory 1</div>
//       <div class="left-[15px] top-[25px] absolute text-neutral-400 text-[12px] font-normal">18.00-20.00</div>
//       <div class="left-[15px] top-[44px] absolute text-neutral-400 text-[12px] font-normal">at Central Jakarta </div>
//       <div class="w-[66px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border-2 border-indigo-500"></div>
//     </div>
//   </div>
//   <div class="left-[559px] top-[604px] absolute">
//     <div class="left-0 top-0 absolute text-zinc-500 text-[14px] font-normal">Week 1</div>
//     <div class="left-[200px] top-0 absolute text-zinc-500 text-[14px] font-normal">Week 2</div>
//     <div class="left-[400px] top-0 absolute text-zinc-500 text-[14px] font-normal">Week 3</div>
//     <div class="left-[600px] top-0 absolute text-zinc-500 text-[14px] font-normal">Week 4</div>
//   </div>
//   <div class="w-[1000px] h-[30px] left-[380px] top-[60px] absolute">
//     <div class="left-0 top-0 absolute text-black text-[24px] font-bold">Dashboard</div>
//     <div class="w-[180px] h-[30px] left-[713px] top-0 absolute">
//       <div class="w-[180px] h-[30px] left-0 top-0 absolute">
//         <div class="w-[180px] h-[30px] left-0 top-0 absolute bg-white rounded-lg"></div>
//       </div>
//       <div class="left-[15px] top-[6px] absolute text-zinc-400 text-[14px] font-normal">Search...</div>
//       <div class="w-3 h-3 left-[153px] top-[9px] absolute">
//         <div class="w-2.5 h-2.5 left-0 top-0 absolute rounded-full border border-zinc-500"></div>
//         <div class="w-[5.66px] h-[0px] left-[8px] top-[8px] absolute origin-top-left rotate-45 border border-zinc-500"></div>
//       </div>
//     </div>
//     <div class="w-[30px] h-[30px] left-[970px] top-0 absolute">
//       <div class="w-[30px] h-[30px] left-0 top-0 absolute bg-stone-300 rounded-full"></div>
//       <img class="w-[52px] h-[51px] left-[-9px] top-[-10px] absolute" src="https://via.placeholder.com/52x51" />
//     </div>
//   </div>
// </div>
//     )
// }

// export default Dashboard



      <div id="main" class="flex flex-row px-[40px] py-[40px] w-[1440px] h-[1024px] bg-offwhite">
        <div id="left-card" class="bg-black w-[280px] h-[944px] rounded-[30px] flex-shrink-0">

        </div>
        <div id="right-card" class="pt-[20px] pb-[40px] w-[1000px] h-[944px] bg-slate-400">
          <div id="header" class="w-full my-[20px] h-[30px] bg-orange-100">

          </div>
          <div id="cards-row" class="w-full my-[20px] h-[120px] bg-orange-200">

          </div>
          <div id="line-chart" class="w-full my-[20px] h-[359px] justify-center items-center flex-shrink-0 bg-orange-300">

          </div>
          <div id="pie-chart-row" class="w-full my-[20px] h-[256px] bg-orange-400">

          </div>
        </div>
      </div>

    )
}

export default Dashboard
