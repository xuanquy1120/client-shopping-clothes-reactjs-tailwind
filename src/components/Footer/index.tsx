export function Footer() {
  return (
    <footer className=" flex justify-center items-center bg-white-300 h-20">
      <span className="font-semibold text-black-40">Copyright © </span>
      <a className="text-black-50 hover:text-gray-300" href="https://www.facebook.com/hoa.than.5832">
        ICE
      </a>
      {'-' + new Date().getFullYear()}
    </footer>
  );
}
