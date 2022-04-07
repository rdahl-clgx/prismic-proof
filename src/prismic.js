import * as prismic from '@prismicio/client';

// Fill in your repository name
export const repositoryName = 'rcd-proof';

export const client = prismic.createClient(repositoryName, {
	// If your repo is private, add an access token
	accessToken: 'MC5ZazhLVFJjQUFDWUEwV044.Qu-_vQgUeAt677-977-9X--_ve-_ve-_vVPvv73vv73vv73vv73vv70F77-977-9Q--_ve-_vUzvv73vv73vv71oQQk',

	// This defines how you will structure URL paths in your project.
	// Update the types to match the Custom Types in your project, and edit
	// the paths to match the routing in your project.
	//
	// If you are not using a router in your project, you can change this
	// to an empty array or remove the option entirely.
});
