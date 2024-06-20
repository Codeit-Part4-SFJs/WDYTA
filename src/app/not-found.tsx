import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <img
        src="https://sprint-fe-project.s3.ap-northeast-2.amazonaws.com/Mogazoa/user/168/1717699464489/nonono.jpeg"
        alt="없어요"
      />
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
