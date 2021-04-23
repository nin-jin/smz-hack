namespace $.$$ {

	export class $my_smz extends $.$my_smz {

		@ $mol_mem
		work_current() {
			return this.$.$mol_state_arg.value( 'work' )
		}

		@ $mol_mem
		filter_payed() {
			return this.$.$mol_state_arg.value( 'payed' )
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
		work_all() {
			return Object.keys( this.work_store().data() )
		}

		@ $mol_mem
		work_list() {

			let works = this.work_all()

			const payed = this.filter_payed()
			if( payed ) works = works.filter( id => String( this.work_payed( id ) ) === payed )
			
			return works.map( id => this.Work_link( id ) )
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
