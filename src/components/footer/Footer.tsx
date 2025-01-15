import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";


function Footer() {

    let data = new Date().getFullYear()
    return (
        <>
            <div className="w-full flex justify-center bg-gray-900 text-white">
                <div className="container flex flex-col items-center text-center py-4">
                    <p className="text-xl font-bold text-center">
                        Blog Pessoal Rubio | Copyright:{data}
                    </p>
                    <p className="text-lg">
                        Acesse nossas redes sociais
                    </p>
                    <div className="flex gap-2">
                        <LinkedInIcon fontSize="large" />
                        <InstagramIcon fontSize="large" />
                        <FacebookIcon fontSize="large" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer