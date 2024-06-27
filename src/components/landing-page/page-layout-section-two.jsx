export function SecondHero() {
    return(<>
    
    <p
              className="second-hero mb-4 tracking-wider second-hero font-bold lg:text-5xl md:text-4xl sm:text-3xl"
              style={{
                maxWidth: "70%",
                textAlign: "center",
                
              }}
            >
              Tackling the problems of today, whilst creating the leaders of
              tomorrow.
            </p>
            <p
              className="second-subheading mb-4 lg:text-2xl"
              style={{
                
               
                marginBottom: "0vh",
                
                textAlign: "center",
              }}
            >
              Join us to engage the next generation of Entrepreneurial Leaders
              to use Innovation and Business to improve the world.{" "}
            </p>
    
    </>)
    
}

export function SecondDivider() {
    return(
        <hr
                className="mt-4"
                style={{
                  width: "80%",
                  backgroundColor: "#FFF6F6",
                  height: "1vh",
                  borderRadius: "0px",
                  border: "none",
                }}
              />
    )
    
}

export function SecondSubHeading(){
    return(<>
    
    <p
                className="second-subheading mt-4 mb-2 lg:text-2xl"
                style={{ textAlign: "center",maxWidth:'80%' }}
              >
                Enactus is the world’s largest experiential learning platform
                dedicated to creating a better world while developing the next
                generation of entrepreneurial leaders and social innovators. The
                Enactus network of global business, academic, and student
                leaders is unified by our vision- to create a better, more
                sustainable world.{" "}
              </p>

              <div className="mt-10 w-5/12 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="w-full rounded-md border-2 border-white bg-transparent px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
              >
                Know More
              </a>
              
            </div>

              

    </>)
}