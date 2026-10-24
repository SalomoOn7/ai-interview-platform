# frozen_string_literal: true

module Portfolios
  class Regenerator
    class NotRegenerable < StandardError; end
    class QueueUnavailable < StandardError; end

    def initialize(portfolio)
      @portfolio = portfolio
    end

    def call
      @portfolio
    end
  end
end
