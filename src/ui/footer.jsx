import GitHubLogo from '../assets/github-mark-white.svg'

export default function Footer(){
    return (
        <footer className="p-4 flex flex-row justify-evently justify-center ">
            <a href="https://github.com/Guniism/Forgot">
                <img src={GitHubLogo} alt="GitHub" className='h-6'/>
            </a>
            <p>&nbsp; Made by&nbsp;
                <a href="https://github.com/Guniism" className="text-green hover:text-lgreen font-medium">
                    Guniism
                </a>
            </p>&nbsp;

        </footer>
    );
}