<script>
	// import {AiOutlineMenu} from 'react-icons/ai'

	// export default function Hamburger() {
	//   return (
	//     <div className={styles.dropdown}>

	//       <button className={styles.dropbtn}>
	//         <AiOutlineMenu className = {styles.dropdownIcon}></AiOutlineMenu>
	//       </button>
	//       <div className = {styles.dropdownContent}>
	//         <Link href="/">Home</Link>
	//         <Link href="/getting_started">Getting Started</Link>
	//         <Link href="/projects">Projects</Link>
	//         <Link href="/about">About</Link>
	//         <Link href="/resources">Resources</Link>
	//         {/* <Link href="/useful_links">Useless Links</Link> */}
	//       </div>
	//     </div>
	//   )
	// }
</script>

<style>
	.dropbtn {
		border: 0px solid rgb(49, 36, 37);
		background-color: transparent;
		margin: 5px;
	}

	.dropdownContent {
		display: none;
		position: absolute;
		background-color: rgb(49, 36, 37);
		min-width: 160px;
		z-index: 200;
	}

	.dropdownIcon {
		color: rgb(255, 255, 255);
		font-size: 20px;
	}

	.dropdownContent a {
		color: rgb(255, 255, 255);
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
		right: 0;
		font-size: 14px;
	}

	.dropdownContent a:hover {
		background-color: #f1f1f1;
		color: black;
	}

	.dropdown:hover .dropdownContent {
		display: block;
	}
</style>
