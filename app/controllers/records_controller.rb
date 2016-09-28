# Documentation Line
class RecordsController < ApplicationController
  def index
    # render any existing record inside a table
    @records = Record.all
  end

  def create
    @record = Record.new(record_params)

    if @record.save
      render json: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @record = Record.find(params[:id])
    @record.destroy
    head :no_content
  end

  private

  def record_params
    params.require(:record).permit(:title, :amount, :date)
  end
end
