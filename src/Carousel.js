import {Carousel , Image} from "antd"
function CarouselComponent(){
    return (
        <>
        <Carousel autoplaySpeed={2000} autoplay={true}>

            <Image width={"100%"} height={300} preview={false}  src="image1.jpg" />
            <Image width={"100%"}  height={300} preview={false}  src="image2.jpg" />
            <Image width={"100%"}  height={300} preview={false}  src="image3.jpg" />
            
            
        </Carousel>
        </>
    )
}
export default CarouselComponent