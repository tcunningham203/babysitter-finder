import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const regions = ["map1", "map2", "map3", "map4", "map5", "map6"];
const displayedNames = ["Lower Manhattan", "Midtown", "Upper East Side", "Upper West Side", "Harlem","Upper Manhattan"];

const ParentQ1 = () => {

    const [selectedRegion, setSelectedRegion] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [isAnimating2, setIsAnimating2] = useState(false);
    const navigate = useNavigate();
  
  
  
    const handlePathClick = (mapName) => {
        hideCurrentMapName();
        showMapName(mapName);
        setSelectedRegion(mapName);
        setIsAnimating2(true);
        setTimeout(() => {
          setIsAnimating2(false);
        }, 200); 
      
    };
  
    const hideCurrentMapName = () => {
      const mapNameElement = document.getElementById(selectedRegion);
      if (mapNameElement) {
        mapNameElement.style.display = "none";
      }
    };
  
    const showMapName = (mapName) => {
      const mapNameElement = document.getElementById(mapName);
      if (mapNameElement) {
        mapNameElement.style.display = "flex";
      }
    };
  
  
    const handleNext = (e) => {
      e.preventDefault();
      setIsAnimating(true);
      setTimeout(() => {
        navigate('/signuppq/2'); // Navigate to the next question page
      }, 1500); // Adjust the delay time as needed for the animation
    };
  
    return (
      <div className="bg-slate-200 min-h-screen flex-col flex items-center ">
        <div className="rounded p-3 sm:text-3xl text-xl text-center sm:w-3/4 lg:w-1/2 ">
          <form onSubmit={handleNext}>
            <h2 className={`text-center  my-4 animate-fade-in-word ${isAnimating ? 'animate-fade-out-words' : ''}`} style={{'--word-index': '1', '--out-index': '0'}}>First, select the area you live in.</h2>
            
            
           <div className='flex min-w-full justify-center '>
       
           <div id="map-container " className='md:w-2/3 w-full'>
        
        <svg
            xmlns="http://www.w3.org/2000/svg"
            
           
            x="0"
            y="0"
            version="1.1"
            viewBox="0 0 987.1 939"
            xmlSpace="preserve"
        >
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M27.1 888.4L45.8 896.6 45 896.2 44.2 895.8 42.6 895.3 23 886.8 25.1 887.6 26.7 888z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M82.9 885.2L90.6 893.7 89 894.1 85.7 894.9 80.8 895.8 75.1 897 69.4 898.6 64.1 899.8 60.1 901 58 902.3 56.8 903.1 55.2 903.9 53.6 904.3 51.9 905.1 50.3 905.5 48.7 905.9 47.5 905.5 29.5 899.8 31.2 899.8 32.8 899.8 34.8 899 36.9 898.2 38.9 897.4 40.9 896.2 42.2 895.3 45 894.1 50.3 892.5 56.8 890.9 64.1 889.2 71.1 887.6 77.2 886.4 81.6 885.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M20.2 864.8L40.1 877.8 34 874.6 12.4 860.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M34.8 838L51.5 856.3 43.4 852.6 24.3 833.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M54 815.6L67.4 838.4 67 837.6 66.2 836.7 64.9 835.9 63.3 834.7 62.1 833.9 60.5 833.1 59.2 832.3 58.8 831.9 58.4 831.9 43 807.4 43.4 807.8 44.2 808.2 45.8 809.1 47.5 809.9 49.5 811.1 51.1 812.3 52.3 813.5 53.6 814.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M130.9 822.5L128.8 843.6 127.6 845.7 125.2 849.8 122.3 854.6 118.7 860.3 115 866 111.8 870.9 109.3 875.4 107.7 877.8 107.3 879.9 106.9 881.5 106.5 883.5 106.5 885.2 106.5 886.4 106.5 887.6 106.5 888.4 106.5 888.8 106.5 889.2 105.6 890 104.4 891.3 103.2 892.9 101.6 894.5 100 895.8 98.3 896.6 96.7 896.6 95.5 896.2 94.3 895.8 93 895.3 92.2 894.9 91.4 894.5 91 894.1 90.6 894.1 90.6 893.7 82.9 885.2 83.3 885.2 83.7 885.6 84.1 886 85.3 886.4 86.1 887.2 87.7 887.6 89.4 888 91 888.4 93 888.4 95.1 887.2 97.1 885.6 99.1 883.9 100.8 881.9 102 880.3 102.8 879.1 103.2 878.7 103.2 878.3 103.2 877.4 103.2 875.8 102.8 874.2 103.2 872.1 103.6 869.7 104 867.3 104.8 865.2 106.5 862 109.7 856.7 113.8 850.2 118.3 842.8 122.7 835.9 126.8 829.8 129.7 824.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M116.6 733.4L128.4 761.4 115.4 756.2 100.4 726.4z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M146.8 668.7L152.5 709.8 147.6 706.5 140.6 664.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M227.3 738.6L217.2 765.9 215.9 767.1 213.1 770 208.6 774.5 203.7 780.2 198.4 785.9 193.1 792 188.7 797.3 185.4 801.3 187.4 783 191.9 777.7 197.6 771.2 204.1 763.9 210.6 756.6 217.2 749.6 222.5 743.9 226.1 740.3z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M187.4 783L185.4 801.3 182.6 805.4 179.3 810.3 175.6 815.6 171.6 820.9 166.7 825.7 161.8 830.2 156.1 833.5 150 835.5 143.5 825.7 151.2 822.9 158.1 818.8 164.7 813.5 170.4 807.4 175.6 800.9 180.1 794.4 184.2 788.3z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M430.8 661.7L420.2 685.3 336.8 738.2 327 727.7z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M327 727.7L336.8 738.2 324.6 769.6 311.2 766.7z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M294.1 765.5L310.8 768.4 306.3 788.3 288.8 790.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M311.2 766.7L324.6 769.6 318.1 772 303.4 770.4z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M288.8 790.8L306.3 788.3 314.4 805.4 299 811.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M299 811.9L314.4 805.4 307.5 812.7 290 820.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M350.7 531.5L370.6 539.2 365.3 544.9 344.5 538.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M548 409.8L528.1 442 377.9 553.9 360 549.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M576.1 450.5L568 484.7 415 595.4 384.8 588.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '2'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M436.1 656.9L453.6 665 454 664.6 455.2 663.8 457.7 663 460.1 661.3 463.4 659.7 467 657.7 471.1 655.6 475.6 653.6 480.1 651.2 484.5 648.7 489 646.7 493.5 644.2 497.6 642.2 501.2 640.2 504.5 638.5 506.9 637.3 509.8 636.1 512.6 634.5 515.9 632.8 519.5 631.2 523.2 629.2 526.9 627.5 530.5 625.5 534.2 623.5 537.9 621.5 541.5 619.8 544.4 617.8 547.2 616.1 549.7 614.5 551.3 612.9 552.9 611.7 553.3 610.5 561.1 589.3 560.2 590.5 558.2 592.1 556.2 593.8 552.9 595.8 549.7 598.2 545.6 600.3 541.5 602.7 537 605.2 532.2 607.6 527.7 610 522.8 612.5 518.3 614.9 513.8 617 509.8 619 506.1 621 502.9 622.7 499.6 624.3 495.5 626.3 490.6 628.8 485.8 631.2 480.5 634.1 474.8 636.9 469.1 639.8 463.4 642.6 458.1 645.5 453.2 648.3 448.3 650.8 444.3 652.8 441 654.4 438.1 655.6 436.5 656.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M559.8 562.8L552.5 589.7 553.3 586.8 554.1 584.8 555.4 582.4 556.2 580.7 556.6 578.7 557 577.5 557.4 576.3 557.8 575.9 557.8 575.5 566.3 545.3 565.9 545.8 565.9 546.6 565.5 547.8 564.7 549.4 563.9 551.4 563.1 553.9 561.9 556.7 560.6 559.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M573.3 538.8L590 550.2 590.8 550.2 593.2 549.8 596.5 549.8 600.9 549.4 605.4 548.6 609.5 547.4 613.1 546.2 616 544.1 618 541.7 620.1 539.2 622.1 536.4 623.7 533.9 625.8 531.5 627.8 529.5 629.8 528.3 631.9 527.4 633.1 527.4 634.7 527.4 636.3 527.4 638.4 527.4 640.4 527.8 642.5 527.8 644.9 527.4 647.3 527 650.2 526.6 652.6 525.8 655.5 524.6 658.7 523.4 661.6 521.3 664.8 518.9 668.1 516 671.3 512.8 674.2 509.1 676.6 505 678.7 501.4 679.9 497.7 681.1 493.6 687.6 468.4 686 473.3 684.4 478.2 681.9 482.7 678.7 487.5 675 492 670.9 496.5 666.9 500.2 663.2 503 659.1 505 655.5 507.1 651.8 508.3 648.6 509.5 645.3 510.3 642 510.7 639.2 510.7 636.3 510.7 633.9 510.7 631.5 510.7 629.4 510.7 627.4 510.3 625.8 510.7 623.3 511.6 620.5 513.2 618 515.6 615.6 518.5 613.6 521.7 611.1 525 608.7 528.3 606.2 531.5 602.6 533.9 598.1 535.6 592.8 537.2 587.1 538 581.8 538.4 577.3 538.8 574.5 538.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M680.7 415.1L675.8 451.3 697 415.5 707.6 370.3z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M625 418.8L631.1 454.2 635.9 460.3 630.7 426.5z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M755.6 256.4L738.9 298.7 726.7 326 740.1 290.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M740.1 290.6L726.7 326 701.1 383 708 361.4z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M708 361.4L701.1 383 655.1 415.1 650.6 402.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M650.6 402.1L655.1 415.1 643.7 414.3 636.8 401.3z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M636.8 401.3L643.7 414.3 628.6 421.6 617.6 410.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M617.6 410.2L628.6 421.6 628.6 427.7 617.2 417.5z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M617.2 417.5L628.6 427.7 631.9 432.2 621.7 423.7z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M621.7 423.7L631.9 432.2 600.9 448.5 583.4 443.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M621.7 279.6L626.2 312.5 622.5 304.8 617.6 269.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M716.5 267L701.9 302.4 692.5 315.4 704.7 283.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M704.7 283.2L692.5 315.4 677 324.3 685.6 294.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M685.6 294.6L677 324.3 671.8 334.5 679.1 306.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M679.1 306.9L671.8 334.5 637.2 354.1 635.9 331.7z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M635.9 331.7L637.2 354.1 628.6 369.5 625.4 350.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M625.4 350.8L628.6 369.5 585.5 391.5 570.8 378.5z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M570.8 378.5L585.5 391.5 581.8 398.8 566.3 387.4z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M566.3 387.4L581.8 398.8 570.4 407 552.1 397.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '4'}}
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M552.1 397.6l-33-52.5 44-30.9s25.6-25.6 35-26.1c9.4-.4 23.6-8.6 23.6-8.6l-4.1-9.8L642 253l6.5 12.6 38.7-38.2 29.3 39.5-11.8 16.3-19.1 11.4-6.5 12.2-43.1 24.8-10.6 19.1-54.5 27.7-4.5 8.9-14.3 10.3z"
                className={`map5 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '7', '--out-index': '3'}}
                onClick={() => handlePathClick("map5")}
                data-map="map5"
                clipRule="evenodd"
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M872.4 55.7L876.9 95.2 876.9 94.8 876.9 93.6 872 53.7 872 54.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M926.9 28.1L920.8 72.8 920 75.7 919.2 77.7 918 79.8 917.2 81.8 916.8 83 922 40.7 922.5 38.7 923.3 36.2 924.9 33.8 925.7 30.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M969.7 87.5L955 120.9 951.8 125.3 947.7 129.8 943.2 134.3 938.3 138.4 933.8 142 929.8 144.5 926.9 146.1 924.5 146.9 922 147.7 919.6 148.1 917.6 148.5 915.9 148.5 914.3 148.9 913.5 148.9 913.1 148.9 907.8 159.1 911.1 135.5 917.6 122.9 918 122.9 918.8 122.5 920.8 122.5 922.9 122.1 925.7 121.7 928.6 121.3 931.4 120.5 934.3 119.2 937.9 117.2 943.2 113.9 948.9 109.5 954.6 104.6 960.7 98.9 965.6 93.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M911.1 135.5L907.8 159.1 898.4 162.8 899.3 140z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M899.3 140L898.4 162.8 891.1 153.8 889.9 129z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M889.9 129L891.1 153.8 882.6 155.5 879.3 130.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M747.9 245L777.6 246.6 775.1 246.6 773.1 246.6 771.5 247.4 769.8 249.1 768.6 251.1 767.4 253.1 766.6 255.2 765.8 256.8 765.4 258 765.4 258.4 765 258.8 764.5 259.2 764.1 259.6 763.3 260.5 762.5 260.9 761.3 261.7 760.5 262.1 759.7 262.1 725.9 264.5 726.7 264.1 727.9 263.7 728.7 262.9 730 262.1 730.8 261.3 731.6 260.5 732.4 260 732.4 259.6 732.8 259.2 733.2 257.6 734 255.6 735.2 252.7 736.9 250.3 738.5 247.8 740.5 246.2 742.6 245 745 245z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M883.4 140.4L886.2 163.2 786.5 248.6 759.3 247z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M720.6 261.7l-28.1-38.2 10.2-25.6 29.7-20.8s12.6-39.9 15.1-42.7c2.8-2.8 23.6-2.8 23.6-2.8l101.3-75.7s-2.4-13 2.4-17.9c4.9-4.9 30.5-24.4 30.5-24.4s12.2-4.1 19.1 4.9c6.9 8.5-2 17.9-2.4 22.4-.8 4.1 5.7 12.2 5.7 12.2l7.7-7.7 6.5 1.6-1.6 9.4s8.5-6.1 16.3-2.8c7.3 3.7 4.5 12.6 4.5 12.6S975 70 971.7 82.6c-2.8 12.2-29.7 33.4-37.4 36.6-7.3 3.3-16.7 3.7-16.7 3.7l-6.5 12.6-11.8 4.5-9.4-11-10.6 1.6 4.1 9.8L759.3 247s-10.6-3.3-16.7-2c-6.1 1.6-10.2 14.7-10.2 14.7s-4.5 4.5-6.5 4.9c-2.5-.1-5.3-2.9-5.3-2.9z"
                className={`map6 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '5', '--out-index': '2'}}
                onClick={() => handlePathClick("map6")}
                data-map="map6"
                clipRule="evenodd"
            ></path>
  
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M82.9 885.2s-37 7.3-40.7 10.2c-3.3 2.8-11.4 6.1-13.8 3.7-2.4-2.4-1.2-10.6-1.2-10.6S14.6 884.4 15 880c0-4.5 5.3-15.1 5.3-15.1l-7.7-4.1 9-17.5 8.1 3.7 5.3-9-10.6-4.9 8.1-16.3s7.3-.8 10.6.4c2.9 1.6 7.7 4.5 9 2.4 1.2-2.4 3.7-2 1.6-4.9-2-2.9-10.6-7.3-10.6-7.3s9.4-15.1 12.2-19.5c2.8-4.5 13-8.1 14.7-7.7 2 .4 2.8 8.1 7.3 4.9 4.5-3.3 26.5-32.6 26.5-32.6s8.1 6.1 9 9.4c.8 3.3 19.5 57 18.3 60.6-1.2 3.3-23.6 37-26 42.7-2.8 5.7-1.6 13.4-1.6 13.4s-7.3 10.6-12.2 9.8c-5.2-.8-8.4-3.2-8.4-3.2z"
                className={`map1 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '2', '--out-index': '1'}}
                onClick={() => handlePathClick("map1")}
                data-map="map1"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M143.5 825.7L113 744.4l3.7-11-16.3-6.9 7.7-15.5s13.8 4.1 15.9 2.4c2-1.2 22.8-44.8 22.8-44.8l-6.1-4.1 4.5-9 9.8 2.8 5.7-7.3 4.1 4.5 37.8 61 14.7 5.3 10.2 16.7s-30.9 32.6-39.9 44.4c-8.7 12.3-22.9 38.8-44.1 42.8z"
                className={`map1 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '5', '--out-index': '2'}}
                onClick={() => handlePathClick("map1")}
                data-map="map1"
                clipRule="evenodd"
            ></path>
  
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M167.1 885.2L184.2 897.4 183.8 897 182.2 896.6 180.5 895.8 178.1 894.5 175.6 893.7 173.2 893.3 171.6 892.9 170.4 892.9 169.5 893.3 168.3 893.3 167.1 893.3 165.9 893.3 164.3 892.9 162.6 892.9 160.6 892.1 159 891.7 156.9 891.3 155.3 890.5 153.7 889.6 152 888.8 150.8 888.4 149.2 888 148 888 146.3 888.4 144.7 888.8 143.1 889.6 141.9 890.5 140.6 890.9 139.8 891.7 139 892.1 138.2 892.1 138.2 892.5 109.7 879.1 110.1 879.1 110.5 878.7 111.8 878.3 113 877.4 114.6 876.6 116.2 875.8 117.9 875 119.9 874.2 121.9 873.4 123.6 873.8 125.6 874.2 127.2 874.6 128.8 875.8 130.9 876.6 132.9 877.4 135.4 878.3 137.8 879.1 140.2 879.5 142.3 879.9 144.3 880.3 145.9 880.7 147.6 880.7 148.8 880.3 150 879.9 151.6 879.9 153.7 880.3 156.5 881.1 159.8 881.9 162.6 883.1 165.1 884.4 166.7 885.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M180.9 899.4L194.8 908.8 182.6 902.7 165.5 892.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M287.2 827.4L279.8 851 279.4 851.8 277.4 854.6 274.5 858.3 271.3 863.2 268 867.7 265.2 872.1 262.7 875.4 261.5 877 260.3 878.7 259.1 880.3 257 882.7 255 885.2 253 887.6 250.9 890 249.3 892.1 248.1 893.3 246.1 894.9 242.8 897.4 238.3 900.2 233.4 903.5 228.6 906.3 224.1 909.2 220.8 911.2 219.2 912 217.6 912 215.1 911.6 211.9 910.4 208.2 909.2 205 907.6 202.1 906.3 200.1 905.1 199.3 904.7 194.8 908.8 180.9 899.4 186.2 894.9 187 895.3 189.5 896.6 193.1 898.2 197.2 899.8 201.7 901.9 205.8 903.1 209 903.9 211.1 903.9 213.1 902.7 217.2 899.8 222.9 896.6 229 892.9 235.1 888.8 240.4 885.6 244.8 882.3 246.9 880.3 248.5 878.7 250.5 876.2 253.4 873.4 255.8 870.1 258.3 867.3 260.7 864.4 262.7 862 264 860.3 265.6 857.9 268.4 853.8 272.1 848.1 276.2 842.4 280.2 836.7 283.9 831.9 285.9 828.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M134.1 838.4L157.7 859.9 152.9 858.3 128 836.3z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '5'}}
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M229.8 751.7s46.4 68.4 49.6 70.4c3.3 2 7.7 5.3 7.7 5.3s-21.2 29.7-23.2 33c-2.4 3.3-13.8 16.7-17.1 20-2.8 3.7-33 22-35.8 23.6-3.3 1.6-24.8-8.9-24.8-8.9l-5.3 4.5-15.5-7.3 1.6-6.9s-14.7-6.5-17.1-5.3c-2.8 1.2-7.7.4-14.7-1.6-6.5-1.6-10.2-6.5-15.5-4.1-5.3 2-10.2 4.9-10.2 4.9s-.8-2 2-9.8c3.3-7.7 12.2-23.2 12.2-23.2l6.5 1.6 3.7-9.4-6.1-2 2-5.7s17.9 8.1 23.2 6.5c5.7-2 27.3-20.8 33.8-28.9 6.8-8.7 28.3-53.1 43-56.7z"
                className={`map1 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '7', '--out-index': '2'}}
                onClick={() => handlePathClick("map1")}
                data-map="map1"
                clipRule="evenodd"
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M179.7 638.5L216.8 656.9 206.6 652.8 166.7 632.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '9', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M230.2 569.3L257.4 601.5 247.7 593.8 218.4 559.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M358.8 564.1L360 597.4 359.6 598.2 359.2 599.9 358 602.3 356.7 605.2 354.7 608.8 353.1 612.5 351.1 616.1 348.6 619.8 347.4 621.9 346.2 623.9 344.5 626.3 342.5 629.2 340.5 632 338.4 634.9 336 638.1 334 641 331.5 644.2 329.5 647.1 327 649.9 325 652.4 323.4 654.4 321.8 656.4 320.5 658.1 319.3 659.3 318.1 660.5 316.1 662.1 313.6 664.6 310.8 667 307.9 669.5 304.3 672.7 300.6 675.6 296.9 678.8 293.3 682.1 289.2 684.9 285.5 687.8 282.3 690.6 279 693.1 276.2 695.5 273.3 697.1 271.3 698.4 248.1 690.2 250.5 688.6 253.4 686.2 257 683.7 261.1 680.5 265.6 677.2 270.1 673.5 275 669.5 279.8 665.4 284.3 661.7 289.2 657.7 293.3 654 297.3 650.8 300.6 647.5 303.8 645 305.9 643 307.5 641.4 309.1 639.8 310.8 637.7 312.8 635.3 315.2 632.4 317.7 629.2 320.1 625.9 323 622.3 325.8 618.6 328.7 614.5 331.5 610.9 334 607.2 336.8 603.5 339.3 600.3 341.3 597 342.9 594.2 344.5 591.7 347.4 587.3 349.8 582.8 352.3 577.9 354.3 573.8 355.9 569.8 357.6 566.9 358.4 564.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M248.1 690.2L271.3 698.4 267.2 700.8 262.3 703.2 257.4 706.1 252.2 708.5 247.3 711 243.2 712.6 240.4 714.2 239.5 714.6 208.2 710.2 209.4 709.8 212.7 708.1 217.6 705.7 223.7 702.8 230.2 699.6 236.7 696.3 242.8 693.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '5'}}
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M208.2 710.2l-41.1-62.3 5.3-5.3 5.3 2 2-6.1-13-5.7s17.5-38.3 24.8-41.9c7.7-4.1 38.7-21.6 38.7-21.6l-11.8-10.2 8.5-8.1s14.7 8.6 15.9 8.1c1.6 0 6.9-12.2 15.5-15.1 8.1-2.8 15.9-4.5 25.6-14.2 10.2-10.2 32.6-28.5 32.6-28.5l25.2 46.8 6.1-5.3 11 21.2s-6.9 16.3-14.2 27.7c-7.3 11.8-30.5 43.1-37 49.6-6.1 6.5-48 41.9-59.4 48.8-11.9 7-40 20.1-40 20.1z"
                className={`map2 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '4', '--out-index': '1'}}
                onClick={() => handlePathClick("map2")}
                data-map="map2"
                clipRule="evenodd"
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M397.5 620.2L385.6 652.8 333.6 690.2 332.7 667z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M332.7 667L333.6 690.2 323 683.3 319.3 658.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M319.3 658.1L323 683.3 302.2 699.2 292.9 678.4z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M303 694.7L310.4 712.2 279.8 730.9 264.8 717.9z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M264.8 717.9L279.8 730.9 273.7 728.5 257.4 714.6z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '12', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M257.4 714.6L273.7 728.5 262.3 735 243.6 723.2z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '13', '--out-index': '3'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M243.6 723.2L262.3 735 264.8 743.9 246.5 733.8z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '10', '--out-index': '4'}}
            ></path>
            <path
                fill="#0E4774"
                fillRule="evenodd"
                d="M246.5 733.8L264.8 743.9 257.4 749.6 237.1 741.1z"
                clipRule="evenodd"
                className={`map7 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '11', '--out-index': '5'}}
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M237.1 741.1l-16.7-27.3s40.3-22 46.4-26.9c6.5-4.5 39.5-30.5 43.1-34.6 3.7-3.7 42.3-53.3 45.2-60.2 3.3-6.9 9.4-21.2 9.4-21.2l33 49.3-64.8 46.8-13.4-9-26.5 20.4 10.2 16.3-38.3 23.2-7.3-3.3-13.8 8.5 2.8 10.6-9.3 7.4z"
                className={`map2 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '3'}}
                onClick={() => handlePathClick("map2")}
                data-map="map2"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M290 820.9L238.3 751.7 254.6 742.3 251.8 729.3 259.9 723.2 270.1 726.9 314.4 698.4 305.9 679.6 318.9 669.1 335.2 678.4 406 628.8 430.8 661.7 327 727.7 311.2 766.7 303.4 770.4 294.1 765.5 288.8 790.8 299 811.9z"
                className={`map2 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '8', '--out-index': '2'}}
                onClick={() => handlePathClick("map2")}
                data-map="map2"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M360 549.8l-9.4-18.3-6.1 7.3-23.2-40.3s27.7-18.7 31.7-23.6c4.1-5.3 25.6-21.2 29.7-23.2 4.1-2 130.2-100.5 130.2-100.5l35 58.6-187.9 140z"
                className={`map3 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '3', '--out-index': '1'}}
                onClick={() => handlePathClick("map3")}
                data-map="map3"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M384.8 588.9L364.1 559.2 554.1 418 576.1 450.5z"
                className={`map0 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '5', '--out-index': '1'}}
              
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M393.4 595.8l42.7 61s50.9-26.5 66.7-34.2c16.3-8.1 55.8-26.9 58.2-33.4 2.4-6.9-4.1-21.6-.4-29.7 3.7-8.1 5.7-14.2 5.7-14.2l-35.4-47.6-137.5 98.1z"
                className={`map4 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '2'}}
                onClick={() => handlePathClick("map4")}
                data-map="map4"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M537 489.2l36.2 49.6s25.6 0 33-7.3c6.9-7.7 11.8-19.9 19.5-20.8 7.7-1.2 27.7 6.1 49.2-18.7 21.6-24.4 12.6-55.3 12.6-55.3l-6.9-21.6 26.9-44.8-61.5 45.2-13.8-5.3-7.3 8.5 5.7 7.7-93.6 62.8z"
                className={`map5 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '4', '--out-index': '3'}}
                onClick={() => handlePathClick("map5")}
                data-map="map5"
                clipRule="evenodd"
            ></path>
            <path
                fill="#5AA5CC"
                fillRule="evenodd"
                d="M583.4 443.6l-27.3-38.2 14.7-10.6 6.1-11.4 26.1-13.8 26.5-8.9 13-22 22.8-16.3 23.6-6.5 15.9-26.1 9.8-4.5 9.4-17.9 10.6.8 7.7-17.1s5.3-.8 8.5.8c3.7 2 4.9 4.5 4.9 4.5l-15.5 34.2-32.2 70.8-57.4 40.7-13.8-.8-19.1 9-.4 7.3 4.5 6.1-38.4 19.9z"
                className={`map5 animate-mapfade-in-word ${isAnimating ? 'animate-mapfade-out-words' : ''}`} style={{'--word-index': '6', '--out-index': '1'}}
                onClick={() => handlePathClick("map5")}
                data-map="map5"
                clipRule="evenodd"
            ></path>
        </svg>
        {selectedRegion && (
                                      <button id="toggle-button" className={` bg-slate-800 hover:bg-slate-900 text-white font-bold py-1 w-72 rounded-full focus:outline-none focus:shadow-outline animate-mapfade-in-button ${isAnimating ? 'cursor-default disabled:pointer-events-none animate-squish-button ' : ''}`}
                                          style={{ '--word-index': '0', '--blowup-index': '0' }}
                                          disabled={isAnimating} onClick={handleNext}>
                                          <span className={`button-text ${isAnimating ? 'animate-mapfade-out-words' : ''}`}
                                              style={{ '--word-index': '0', '--out-index': '0' }}>  <div className={`rounded-xl flex justify-center items-center  h-11   text-center${isAnimating ? 'animate-fade-out-button' : ''} ${isAnimating2 ? 'pulse-animation' : ''}`} style={{ '--word-index': '0', '--out-index': '5' }}>
                                              {regions.map((region, index) => (
                                                  <div
                                                      id={region}
                                                      key={region}
                                                      className={`map-name ${isAnimating ? 'animate-fade-out-button' : ''}`}
                                                      style={{ display: selectedRegion === region ? "flex" : "none" }}>
                                                      {displayedNames[index]}
                                                  </div>
                                              ))}
                                          </div> </span>
                                      </button>
                                  )}
  
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

export default ParentQ1;
