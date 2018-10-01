import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Title from '../components/pagetitle'

const AboutPage = () => (
	<Layout>
		<div style={{ color: `teal` }}>
			<Title titleText="About the Author" />
			<p>Such wow. Very React.</p>
		</div>
		<Link to="/">Home</Link>	
		
	</Layout>
)



export default AboutPage