import './globals.css'

import localFont from 'next/font/local'

const fontRegular = localFont({
	src: './fonts/BerkeleyMonoVariable-Regular.woff2',
})

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={fontRegular.className}>
			<head></head>
			<body>
				<h1>Shawn API</h1>
				<hr />
				{children}
			</body>
		</html>
	)
}
