namespace $.$$ {

	export class $my_smz extends $.$my_smz {

		@ $mol_mem
		work_current() {
			return this.$.$mol_state_arg.value( 'work' )
		}

		@ $mol_mem
		filter_payed() {
			return this.$.$mol_state_arg.value( 'payed' ) !== null
		}

		@ $mol_mem
		pages() {
			return [
				this.Menu(),
				this.Works(),
				... this.work_current() ? [ this.Details( this.work_current() ) ] : []
			]
		}

		@ $mol_mem
		work_list() {

			const payed = this.filter_payed()
			
			return Object.keys( this.work_store().data() )
			.filter( id => this.work_payed( id ) === payed )
			.map( id => this.Work_link( id ) )

		}

		work_title( id: string ) {
			return this.work_store().sub( id as any ).value( 'title' )
		}

		work_description( id: string ) {
			return this.work_store().sub( id as any ).value( 'description' )
		}

		work_payed( id: string ) {
			return this.work_store().sub( id as any ).value( 'is_payed' )
		}

		id( id: string ) {
			return id
		}

	}

}
