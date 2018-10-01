import React from "react"
import { Link } from 'gatsby'
// This is only used for linking in between different sites in the directory

import Layout from '../components/layout'
import Title from '../components/pagetitle'

const ContactPage = () => (
	<Layout>
		<div style={{ color: `magenta` }}>
			<Title titleText="Contact the Author" />
			<p>Such wow. Very React.</p>
		</div>
			<Link to="/">Home</Link>			
		
	</Layout>
)



export default ContactPage