import { Button } from "@mui/material";

const FrameComponent = () => {
  return (
    <div className="relative bg-white w-full h-[870px] text-left text-xl text-gray font-inter">
      <div className="absolute top-[0px] left-[0px] bg-aquamarine w-[1550px] h-[83px]" />
      <a className="[text-decoration:none] absolute top-[28px] left-[804px] text-[inherit] inline-block w-[73px] h-[27px]">
        Home
      </a>
      <a className="[text-decoration:none] absolute top-[28px] left-[937px] text-[inherit] inline-block w-[73px] h-[27px]">
        Report
      </a>
      <a className="[text-decoration:none] absolute top-[28px] left-[1070px] text-[inherit] inline-block w-[51px] h-[27px]">
        Map
      </a>
      <a className="[text-decoration:none] absolute top-[28px] left-[1181px] text-[inherit] inline-block w-[98px] h-[27px]">
        About Us
      </a>
      <h1 className="m-0 absolute top-[163px] left-[89px] text-[118px] font-black font-inherit inline-block w-[622px] h-[272px]">{`Crime Hotspots `}</h1>
      <h3 className="m-0 absolute top-[501px] left-[89px] text-[30px] font-semibold font-inherit text-dimgray inline-block w-[484px] h-9">
        <p className="m-0">Explore crime rate in your Areas.</p>
        <p className="m-0">plot Heat maps.</p>
      </h3>
      <Button
        className="absolute top-[625px] left-[89px]"
        sx={{ width: 401 }}
        variant="contained"
        name="Explore It"
        id="Explore"
        color="success"
      >
        Explore It
      </Button>
      <img
        className="absolute top-[133px] left-[647px] w-[696px] h-[658px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[21px] left-[36px] w-10 h-10 object-cover"
        alt=""
        src="/androidchrome512x512-1@2x.png"
      />
      <h2 className="m-0 absolute top-[26px] left-[89px] text-[26px] font-semibold font-inherit text-black inline-block w-[216px] h-[30px]">
        Trojan Horsez
      </h2>
      <Button
        className="absolute top-[20px] left-[1320px]"
        sx={{ width: 98 }}
        variant="contained"
        name="Login"
        color="primary"
      >
        Login
      </Button>
    </div>
  );
};

export default FrameComponent;
